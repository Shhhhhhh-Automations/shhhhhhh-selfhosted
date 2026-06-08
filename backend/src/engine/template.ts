/**
 * Evaluates template expressions in strings.
 * Syntax: {{ $node["NodeName"].data.field.nested }}
 * Also supports: {{ $trigger.field }} for the trigger payload.
 */
export function evaluateTemplate(
	template: string,
	nodeResults: Record<string, any>,
	triggerPayload?: any,
): string {
	if (!template || typeof template !== 'string') return template;
	return template.replace(/\{\{\s*(.+?)\s*\}\}/g, (match, expr) => {
		try {
			// $node["NodeName"].data.field
			const nodeMatch = expr.match(/\$node\["(.+?)"\]\.(.+)/);
			if (nodeMatch) {
				const [, nodeName, path] = nodeMatch;
				const nodeData = nodeResults[nodeName];
				if (!nodeData) return match;
				return String(resolvePath(nodeData, path));
			}
			// $trigger.field
			const triggerMatch = expr.match(/\$trigger\.(.+)/);
			if (triggerMatch && triggerPayload) {
				return String(resolvePath(triggerPayload, triggerMatch[1]));
			}
			return match;
		} catch {
			return match;
		}
	});
}

function resolvePath(obj: any, path: string): any {
	return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export function evaluateTemplatesInObject(
	obj: Record<string, any>,
	nodeResults: Record<string, any>,
	triggerPayload?: any,
): Record<string, any> {
	const result: Record<string, any> = {};
	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === 'string') {
			result[key] = evaluateTemplate(value, nodeResults, triggerPayload);
		} else {
			result[key] = value;
		}
	}
	return result;
}
