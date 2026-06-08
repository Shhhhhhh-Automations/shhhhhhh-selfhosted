import type { Context } from 'hono';

/**
 * Hook to safely parse incoming request JSON payloads.
 * Returns an empty object or custom default value if parsing fails.
 */
export async function usePayload<T = any>(c: Context, defaultValue: any = {}): Promise<T> {
	try {
		const body = await c.req.json();
		return body ?? defaultValue;
	} catch {
		return defaultValue;
	}
}
