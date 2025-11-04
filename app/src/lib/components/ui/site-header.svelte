<script lang="ts">
	import MainNav from '$lib/components/ui/main-nav.svelte';
	import ModeToggle from '$lib/components/ui/mode-toggle.svelte';
</script>

<header class="flex flex-col border-b">
	<div class="flex items-center justify-between p-4">
		<span class="font-title text-5xl">Bad Use Of</span>
		<ModeToggle />
	</div>
	<MainNav />
</header>
