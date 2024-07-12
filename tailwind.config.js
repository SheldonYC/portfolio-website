/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				purple: {
					DEFAULT: "#B00AFF",
					900: "#1D0831",
					800: "#3A1063",
					100: "#C99AF5",
				},
				grey: {
					DEFAULT: "#5B525C",
				},
			},
		},
	},
	plugins: [],
};
