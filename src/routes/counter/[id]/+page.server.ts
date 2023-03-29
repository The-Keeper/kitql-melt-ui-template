import { AddToCounterStore } from '$houdini';
import type { Actions } from './$houdini';

export const actions: Actions = {
	default: async (event) => {
		return await new AddToCounterStore().mutate({ id: event.params.id, amount: 1 }, { event });
	},
};
