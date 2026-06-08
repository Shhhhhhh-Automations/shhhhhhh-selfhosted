const BASE_URL = '/api';

export async function apiFetch(path: string, options: RequestInit = {}) {
	const url = `${BASE_URL}${path}`;
	const response = await fetch(url, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options.headers,
		},
	});

	if (!response.ok) {
		const error = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
		throw new Error(error.message || response.statusText);
	}

	return response.json();
}
