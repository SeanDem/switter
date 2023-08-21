/** @type {import('tailwindcss').Config} */
export default {
	purge: {
		content: ['./src/**/*.svelte'],
		options: {
			whitelistPatterns: [/svelte-/]
		}
	},
	daisyui: {},
	variants: {},
	plugins: [require('daisyui')]
};
