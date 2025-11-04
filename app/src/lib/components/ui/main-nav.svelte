<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { routes } from '$lib/assets/routes';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<nav class="flex flex-row px-2 pb-2">
	{#each routes as route (route.path)}
		<Button variant="link" onclick={() => goto(resolve(route.path as Pathname))}>
			{route.title}
		</Button>
	{/each}
</nav>
