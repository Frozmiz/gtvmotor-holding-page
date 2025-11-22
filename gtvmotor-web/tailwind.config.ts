import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		extend: {
			colors: {
				gtvorange: '#f97316',
				gtvgray: '#111827',
			},
		},
	},
} satisfies Config;

