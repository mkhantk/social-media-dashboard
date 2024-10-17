/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				fontBody: "Inter",
			},
			colors: {
				// Primary colors
				limeGreen: "hsl(163, 72%, 41%)",
				brightRed: "hsl(356, 69%, 56%)",

				// Social media colors
				facebook: "hsl(208, 92%, 53%)",
				twitter: "hsl(203, 89%, 53%)",
				youtube: "hsl(348, 97%, 39%)",

				// Neutral colors (Dark theme)
				veryDarkBlueBg: "hsl(230, 17%, 14%)",
				veryDarkBlueTopBg: "hsl(232, 19%, 15%)",
				darkDesaturatedBlue: "hsl(228, 28%, 20%)",
				desaturatedBlueText: "hsl(228, 34%, 66%)",
				whiteText: "hsl(0, 0%, 100%)",

				// Neutral colors (Light theme)
				veryPaleBlueTopBg: "hsl(225, 100%, 98%)",
				lightGrayishBlueCardBg: "hsl(227, 47%, 96%)",
				darkGrayishBlueText: "hsl(228, 12%, 44%)",
				veryDarkBlueText: "hsl(230, 17%, 14%)",

				// Gradient colors
				gradientInstagramFrom: "hsl(37, 97%, 70%)",
				gradientInstagramTo: "hsl(329, 70%, 58%)",
				gradientToggleDarkFrom: "hsl(210, 78%, 56%)",
				gradientToggleDarkTo: "hsl(146, 68%, 55%)",
				gradientToggleLight: "hsl(230, 22%, 74%)",
			},
		},
	},
	plugins: [],
};
