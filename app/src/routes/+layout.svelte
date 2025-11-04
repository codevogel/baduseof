<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { getTitleByPathname } from '$lib/assets/routes';
	import { page } from '$app/state';

	let { children } = $props();
	let pageTitle = $derived(getTitleByPathname(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{pageTitle}</title>
</svelte:head>

<ModeWatcher />

{@render children()}
