import type { CountModule } from '../$kitql/moduleTypes';

export const counters = new Map<string, number>();
export const resolvers: CountModule.Resolvers = {
	Query: {
		counter: async (root, args, ctx) => {
			let count = counters.get(args.id) ?? 0;
			return { id: args.id, value: count };
		},
	},
};
