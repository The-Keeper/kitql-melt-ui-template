<script lang="ts">
	import '../app.css';

	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	let darkMode: boolean = false;
</script>

<div class:dark={darkMode}>
	<div class="absolute h-full w-full bg-slate-100 dark:bg-slate-700">
		<ThemeSwitcher bind:checked={darkMode} />
		<slot />
	</div>
</div>
