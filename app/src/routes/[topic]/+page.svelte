<script lang="ts">
	import MarkdownPage from '$lib/components/ui/markdown-page.svelte';

	let { data } = $props();

	let mdContent = $derived(data.mdContent);
	console.log('mdContent:', mdContent);
</script>

<MarkdownPage {mdContent} />
