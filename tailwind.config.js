/** @type {import('tailwindcss').Config} */
export default {
	purge: {
		content: ['./src/**/*.svelte'],
		options: {
			whitelistPatterns: [/svelte-/]
		}
	},
	daisyui: { themes: ['light', 'dark', 'cupcake'] },
	variants: {},
	theme: {
		fontFamily: {
			cn: ['Courier New, Courier, monospace']
		}
	},
	plugins: [require('daisyui')]
};
