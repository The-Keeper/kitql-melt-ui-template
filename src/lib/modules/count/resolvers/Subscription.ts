import { getCounter } from '$lib/counter.server';
import type { CountModule } from '../$kitql/moduleTypes';

export const resolvers: CountModule.Resolvers = {
	Subscription: {
		counterChange: {
			subscribe: async function* (_, { id }) {
				const counter = getCounter(id);
				while (true) {
					const value = await counter.change();
					yield { counterChange: { id, value } };
				}
			},
		},
	},
};
