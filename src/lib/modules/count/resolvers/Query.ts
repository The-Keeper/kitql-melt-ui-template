import { Counter, counters, getCounter } from '$lib/counter.server';
import type { CountModule } from '../$kitql/moduleTypes';

export const resolvers: CountModule.Resolvers = {
	Query: {
		counter: async (root, { id }, ctx) => {
			const counter = getCounter(id);
			return counter.toJSON();
		},
	},
};
