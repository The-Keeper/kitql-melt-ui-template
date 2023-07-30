<script lang="ts">
	import type { PageData } from './$houdini';
	import ShowCurrentUser from './ShowCurrentUser.svelte';

	export let data: PageData;

	$: ({ CurrentUser } = data);
</script>

<div class="dark:text-white">
<h1 class="text-4xl center">Welcome to SvelteKit</h1>

{#if $CurrentUser.data?.user}
	<ShowCurrentUser user={$CurrentUser.data.user} />
{/if}

	<a class="underline" href="/counter/{$CurrentUser.data?.user.id}">Go to counter</a>
</div>