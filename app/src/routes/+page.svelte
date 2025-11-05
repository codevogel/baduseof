<script>
	import MarkdownRenderer from '$lib/components/ui/markdown-renderer.svelte';

	let { data } = $props();

	let mdContent = $derived(data.mdContent);
</script>

<MarkdownRenderer {mdContent} />
