import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import auth from 'auth-astro';
import { loadEnv } from 'vite';
import Google from '@auth/core/providers/google';
const DEV_PORT = 2121;

 const env = loadEnv('production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? 'https://themesberg.github.io'
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	// trailingSlash: 'always',
  output: 'server',
	server: {
		/* Dev. server only */
		port: DEV_PORT,
	},
	integrations: [
		//
		sitemap(),
		tailwind(),
		// auth({
		// 	providers: [
		// 		Google({
		// 			clientId: env.GOOGLE_ID,
		// 			clientSecret: env.GOOGLE_SECRET,
		// 		}),
		// 	],
		// }),
	],
});
