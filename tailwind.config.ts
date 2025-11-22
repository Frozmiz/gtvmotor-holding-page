import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		screens: {
			'mobile-sm': '330px',   // Mobile small: > 330px
			'mobile': '481px',      // Mobile: > 480px
			'mobile-lg': '601px',   // Mobile large: > 600px
			'tablet': '835px',      // Tablet: > 834px
			'tablet-lg': '1025px',  // Tablet: > 1024px
			'laptop': '1441px',     // Laptop: > 1440px
			'desktop': '1441px',    // Desktop: > 1440px
		},
		extend: {
			colors: {
				gtvorange: '#f97316',
				gtvgray: '#111827',
			},
		},
	},
} satisfies Config;

