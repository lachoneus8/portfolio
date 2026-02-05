// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://lachoneus8.github.io',
	base: '/portfolio',
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: [
				'./src/styles/custom.css',
			],
			expressiveCode: {
				themes: ['github-dark', 'github-light'],
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lachoneus8/portfolio' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
