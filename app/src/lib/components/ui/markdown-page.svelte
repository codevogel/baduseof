<script lang="ts">
	import MarkdownRenderer from '$lib/components/ui/markdown-renderer.svelte';

	let { mdContent } = $props();
</script>

<MarkdownRenderer {mdContent} />
