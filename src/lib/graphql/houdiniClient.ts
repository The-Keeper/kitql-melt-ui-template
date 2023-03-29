import { browser } from '$app/environment';
import { HoudiniClient, subscription } from '$houdini';
import type { SubscriptionClient } from '$houdini/runtime/client/plugins';

export default new HoudiniClient({
	url: 'http://localhost:5173/api/graphql',
	plugins: browser ? [subscription(sseSockets)] : [],

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) {
	//     return {
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
});

function sseSockets(): SubscriptionClient {
	return {
		subscribe(payload, handlers) {
			const url = new URL('/api/graphql', location.href);
			url.searchParams.append('query', payload.query);
			url.searchParams.append('variables', JSON.stringify(payload.variables));

			const eventSource = new EventSource(url);

			eventSource.addEventListener('message', (ev) => handlers.next(JSON.parse(ev.data)));

			return () => eventSource.close();
		},
	};
}
