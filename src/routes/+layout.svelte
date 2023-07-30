<script lang="ts">
    import "../app.css";

    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    let darkMode: boolean = false;
</script>
  
<div class:dark={darkMode}>
    <div class="h-full bg-slate-100 dark:bg-slate-600">
        <ThemeSwitcher bind:checked={darkMode}/>
        <slot/>
    </div>
</div>
