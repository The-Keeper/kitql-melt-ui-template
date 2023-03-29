/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: 'src/**/*.graphql',
	plugins: {
		'houdini-svelte': {
			client: 'src/lib/graphql/houdiniClient.ts',
		},
	},
};

export default config;
