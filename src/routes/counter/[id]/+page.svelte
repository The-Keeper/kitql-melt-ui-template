<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { graphql } from '$houdini';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ PageCounter } = data);

	const addToCounter = graphql(`
		mutation AddToCounter($id: String!, $amount: Int!) {
			addToCounter(id: $id, amount: $amount) {
				id
				value
			}
		}
	`);

	const updates = graphql(`
		subscription CounterUpdate($id: String!) {
			counterChange(id: $id) {
				id
				value
			}
		}
	`);
	$: if (browser) {
		updates.listen({ id: $page.params.id });
	}
</script>

<a href="/">&LeftArrow; Back</a>

<div>
	<h1>Count: {$PageCounter.data?.counter.value ?? 0}</h1>
	<button on:click={() => addToCounter.mutate({ id: $page.params.id, amount: 1 })}>
		Add (Client Only)
	</button>
	<form method="post">
		<button>Add (Server Only)</button>
	</form>
	<form method="post" use:enhance>
		<button>Add (Hybrid)</button>
	</form>
</div>
