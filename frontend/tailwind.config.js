/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'oklch(12% 0.01 280)',
				primary: 'oklch(65% 0.25 310)',
				accent1: 'oklch(75% 0.2 230)',
				accent2: 'oklch(85% 0.25 145)',
			},
			fontFamily: {
				sans: ['"Bricolage Grotesque"', 'sans-serif'],
				display: ['"Bricolage Grotesque"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
