import type { CountModule } from '../$kitql/moduleTypes';
import { counters } from './Query';

export const resolvers: CountModule.Resolvers = {
	Mutation: {
		addToCounter: async (root, args, ctx) => {
			let count = counters.get(args.id) ?? 0;
			count += args.amount;
			counters.set(args.id, count);
			return { id: args.id, value: count };
		},
	},
};
