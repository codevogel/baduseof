<script lang="ts">
	import MainNav from '$lib/components/ui/main-nav.svelte';
	import ModeToggle from '$lib/components/ui/mode-toggle.svelte';
</script>

<header class="flex flex-col gap-y-2 border-b">
	<div class="flex items-center justify-between px-4 pt-4">
		<span class="ps-2 font-title text-5xl">Bad Use Of</span>
		<ModeToggle />
	</div>
	<MainNav />
</header>
