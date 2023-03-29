import type { UserModule } from '../$kitql/moduleTypes';

export const resolvers: UserModule.Resolvers = {
	Query: {
		user: async (root, args, ctx) => {
			return {
				id: ctx.user.id.toString(),
				name: ctx.user.name,
			};
		},
	},
};
