import { getCounter } from '$lib/counter.server';
import type { CountModule } from '../$kitql/moduleTypes';

export const resolvers: CountModule.Resolvers = {
	Mutation: {
		addToCounter: async (root, { id }, ctx) => {
			const counter = getCounter(id);
			counter.increment(1);
			return counter.toJSON();
		},
	},
};
