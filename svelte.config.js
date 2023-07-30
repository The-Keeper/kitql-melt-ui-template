import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

// Melt UI preprocessor
import { preprocessMeltUI } from '@melt-ui/pp'
import sequence from 'svelte-sequential-preprocessor'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([
 		vitePreprocess(),
        preprocessMeltUI() 
	]),
	kit: {
		adapter: adapter(),
		alias: {
			$houdini: './$houdini',
			$graphql: './src/lib/graphql',
		},
	},
};

export default config;
