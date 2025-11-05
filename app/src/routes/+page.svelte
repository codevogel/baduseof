<script>
	import MarkdownPage from '$lib/components/ui/markdown-page.svelte';

	let { data } = $props();

	let mdContent = $derived(data.mdContent);
</script>

<MarkdownPage {mdContent} />
