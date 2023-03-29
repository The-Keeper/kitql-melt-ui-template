import { kitqlModules } from '@kitql/all-in';
import { typeDefs } from './$kitql/typedefs';
import { resolvers } from './$kitql/resolvers';

export const userModule = kitqlModules({
	id: 'user-module',
	typeDefs,
	resolvers,
});
