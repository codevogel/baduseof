<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { routes } from '$lib/assets/routes';
</script>

<nav class="flex flex-row">
	{#each routes as route (route.path)}
		<a href={resolve(route.path as Pathname)} class="">{route.title}</a>
	{/each}
</nav>
