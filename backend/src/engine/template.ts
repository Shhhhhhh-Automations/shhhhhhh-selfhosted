import type { ExecutionContext } from './context';

/**
 * Evaluates template expressions embedded in strings.
 *
 * Supported syntax:
 *   {{ $node["Label"].json.field }}      — output JSON of a previous node
 *   {{ $node["Label"].json.a.b.c }}      — nested path resolution
 *   {{ $trigger.field }}                 — trigger payload field
 *   {{ $vars.variableName }}             — global workflow variable
 *   {{ $execution.id }}                  — execution metadata
 */
export function evaluateTemplate(template: string, ctx: ExecutionContext): string {
	if (!template || typeof template !== 'string') return template;

	return template.replace(/\{\{\s*(.+?)\s*\}\}/g, (match, expr) => {
		try {
			// $node["Label"].json.field  (also accepts .data as alias for .json)
			const nodeMatch = expr.match(/\$node\["(.+?)"\]\.(?:json|data)\.(.+)/);
			if (nodeMatch) {
				const [, nodeName, path] = nodeMatch;
				const nodeOutput = ctx.nodeOutputs[nodeName];
				if (!nodeOutput) return match;
				const resolved = resolvePath(nodeOutput.json, path);
				return resolved !== undefined ? String(resolved) : match;
			}

			// $node["Label"] alone — returns the entire json blob as JSON string
			const nodeOnlyMatch = expr.match(/\$node\["(.+?)"\]$/);
			if (nodeOnlyMatch) {
				const nodeOutput = ctx.nodeOutputs[nodeOnlyMatch[1]];
				if (!nodeOutput) return match;
				return JSON.stringify(nodeOutput.json);
			}

			// $trigger.field
			const triggerMatch = expr.match(/\$trigger\.(.+)/);
			if (triggerMatch && ctx.triggerPayload) {
				const resolved = resolvePath(ctx.triggerPayload, triggerMatch[1]);
				return resolved !== undefined ? String(resolved) : match;
			}

			// $vars.variableName
			const varsMatch = expr.match(/\$vars\.(.+)/);
			if (varsMatch) {
				const resolved = resolvePath(ctx.vars, varsMatch[1]);
				return resolved !== undefined ? String(resolved) : match;
			}

			// $execution.id | $execution.workflowId
			const execMatch = expr.match(/\$execution\.(.+)/);
			if (execMatch) {
				const resolved = resolvePath(
					{ id: ctx.executionId, workflowId: ctx.workflowId },
					execMatch[1],
				);
				return resolved !== undefined ? String(resolved) : match;
			}

			return match;
		} catch {
			return match;
		}
	});
}

/** Dot-notation path resolver with bracket notation support */
function resolvePath(obj: any, path: string): any {
	// Support both "a.b.c" and "a[0].b" styles
	const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
	return parts.reduce((acc, key) => acc?.[key], obj);
}

/** Recursively evaluate templates in all string values of an object */
export function evaluateTemplatesInObject(
	obj: Record<string, any>,
	ctx: ExecutionContext,
): Record<string, any> {
	const result: Record<string, any> = {};
	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === 'string') {
			result[key] = evaluateTemplate(value, ctx);
		} else if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
			result[key] = evaluateTemplatesInObject(value, ctx);
		} else if (Array.isArray(value)) {
			result[key] = value.map((item) =>
				typeof item === 'string'
					? evaluateTemplate(item, ctx)
					: typeof item === 'object' && item !== null
						? evaluateTemplatesInObject(item, ctx)
						: item,
			);
		} else {
			result[key] = value;
		}
	}
	return result;
}

/**
 * Legacy adapter: accepts the old (nodeResults, triggerPayload) signature.
 * Used for backward compatibility until all call sites are migrated.
 */
export function evaluateTemplatesInObjectLegacy(
	obj: Record<string, any>,
	nodeResults: Record<string, any>,
	triggerPayload?: any,
): Record<string, any> {
	const mockCtx: ExecutionContext = {
		executionId: '',
		workflowId: '',
		triggerPayload: triggerPayload ?? {},
		nodeOutputs: Object.fromEntries(
			Object.entries(nodeResults).map(([k, v]) => [
				k,
				{ json: v, success: true, nodeType: '', startedAt: '', finishedAt: '' },
			]),
		),
		vars: {},
	};
	return evaluateTemplatesInObject(obj, mockCtx);
}
