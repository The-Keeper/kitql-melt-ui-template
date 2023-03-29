import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { defineConfig } from 'vite';
import { kitql } from '@kitql/all-in';

export default defineConfig({
	plugins: [
		kitql({
			projectName: 'init',
			// prismaFileForEnums: './prisma/schema.prisma'
		}),
		houdini(),
		sveltekit(),
	],
});
