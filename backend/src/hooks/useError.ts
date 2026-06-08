import type { Context } from 'hono';

/**
 * Custom error handler hook/middleware for Hono.
 * Logs errors to the console and returns a formatted JSON error response.
 */
export function useError(err: Error, c: Context) {
	console.error('API Error caught by hook:', err);
	return c.json(
		{
			success: false,
			error: err.message || 'Internal Server Error',
		},
		500,
	);
}
