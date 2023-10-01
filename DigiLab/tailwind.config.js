/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				balloon: "url('/assets/balloon.jpg')",
				equipment: "url('/assets/equipment.jpg')",
			},
		},
	},
	plugins: [require('daisyui')],
};
