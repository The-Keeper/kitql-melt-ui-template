<script lang="ts">
	import type { PageData } from './$houdini';
	import ShowCurrentUser from './ShowCurrentUser.svelte';

	export let data: PageData;

	$: ({ CurrentUser } = data);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if $CurrentUser.data?.user}
	<ShowCurrentUser user={$CurrentUser.data.user} />
{/if}

<a href="/counter/{$CurrentUser.data?.user.id}">Go to counter</a>
