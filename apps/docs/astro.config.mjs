import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.ico',
			title: 'Insidr Documentation',
			logo: {
				light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/insidrmusic/insidr',
			},
			sidebar: [
				{
					label: 'Get started',
					autogenerate: { directory: 'get-started' },
				},
			],
			customCss: [
				'@fontsource/barlow/500.css',
				'@fontsource/barlow/700.css',
				'@fontsource/barlow/800.css',
				'@fontsource/barlow/900.css',
				'./src/styles/custom.css',
			],
		}),
	],
});
