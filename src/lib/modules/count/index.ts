import { kitqlModules } from '@kitql/all-in';
import { typeDefs } from './$kitql/typedefs';
import { resolvers } from './$kitql/resolvers';

export const countModule = kitqlModules({
	id: 'count-module',
	typeDefs,
	resolvers,
});
