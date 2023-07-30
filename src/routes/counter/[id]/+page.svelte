<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { graphql } from '$houdini';
	import type { PageData } from './$houdini';

	import ThemeSwitcher from '../../../lib/components/ThemeSwitcher.svelte';
	import Button from '$lib/components/Button.svelte';

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

<div class="bottom-0 flex flex-col py-4 sm:flex-row sm:flex-nowrap">
	<div class="sticky top-0 flex w-full justify-evenly p-4 sm:w-1/4 sm:flex-col">
		<div><a href="/">&LeftArrow; Back</a></div>
	</div>
	<main class="w-full flex-grow px-3 pt-1">
		<div class="grid place-items-center">
			<div class="pb-5 text-4xl text-amber-950 dark:text-white">
				Count: {$PageCounter.data?.counter.value ?? 0}
			</div>
			<div class="grid items-center justify-center gap-3 sm:flex">
				<Button on:click={() => addToCounter.mutate({ id: $page.params.id, amount: 1 })}>
					Add (Client Only)
				</Button>
				<form method="post">
					<Button>Add (Server Only)</Button>
				</form>
				<form method="post" use:enhance>
					<Button>Add (Hybrid)</Button>
				</form>
			</div>
		</div>
	</main>
</div>
