// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://lachoneus8.github.io',
	base: '/portfolio',
	integrations: [
		starlight({
			title: 'Dave Stevens',
			description: 'Principal Software Engineer - Portfolio',
			customCss: [
				'./src/styles/custom.css',
			],
			expressiveCode: {
				themes: ['github-dark', 'github-light'],
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lachoneus8/portfolio' }],
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'Home', slug: 'index' },
						{ label: 'About', slug: 'about' },
						{ label: 'Resume', slug: 'resume' },
						{ label: 'Game Jams', slug: 'game-jams' },
					],
				},
				{
					label: 'Highlighted Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Site',
					items: [
						{ label: 'Behind the Build', slug: 'behind-the-build' },
					],
				},
			],
		}),
	],
});
