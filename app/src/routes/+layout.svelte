<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { getTitleByPathname } from '$lib/assets/routes';
	import { page } from '$app/state';
	import SiteHeader from '$lib/components/ui/site-header.svelte';
	import Main from '$lib/components/ui/main.svelte';
	import Footer from '$lib/components/ui/footer.svelte';

	let { children } = $props();

	let pageTitle = $derived(getTitleByPathname(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{pageTitle}</title>
</svelte:head>

<ModeWatcher />

<div class="flex min-h-svh flex-col">
	<SiteHeader />
	<Main>
		{@render children()}
	</Main>
	<Footer />
</div>
