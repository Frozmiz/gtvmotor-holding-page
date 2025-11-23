import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		screens: {
			sm: '480px', // mobile confortable
			md: '768px', // desktop base
			lg: '1024px',
			xl: '1441px', // desktop amplio
		},
		extend: {
			colors: {
				gtvorange: '#f97316',
				gtvgray: '#111827',
				gtvblue: '#007bff',
			},
		},
	},
} satisfies Config;
