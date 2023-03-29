import { dev } from '$app/environment';
import { kitqlServer, type IKitQLContext } from '$lib/graphql/kitqlServer';
import { handleGraphiql, handleGraphql } from '@kitql/all-in';
import type { RequestEvent } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(
	handleGraphql<IKitQLContext, RequestEvent>(kitqlServer),
	handleGraphiql({
		enabled: dev,
	}),
);
