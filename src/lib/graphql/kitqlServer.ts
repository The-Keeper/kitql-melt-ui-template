import { useKitqlModules, type KitQLHandleGraphQL } from '@kitql/all-in';
import type { RequestEvent } from '@sveltejs/kit';
import { modules } from './$kitql/_appModules';

const plugins = [];
plugins.push(useKitqlModules(modules));

export type IKitQLContext = ReturnType<typeof getContext>;
function getContext({ request }: RequestEvent) {
	// get the user from the cookies or auth header or something
	const user = { id: 'james', name: 'James Birtles' };

	return {
		request,
		user,
	};
}

export const kitqlServer: KitQLHandleGraphQL<IKitQLContext, RequestEvent> = {
	plugins,
	context: getContext,
};
