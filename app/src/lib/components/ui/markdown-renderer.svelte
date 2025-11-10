<script lang="ts">
	// --- exmarkdown imports ---
	import type { Plugin } from 'svelte-exmarkdown';
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	// --- rehype imports ---
	// plugins
	import rehypeSlug from 'rehype-slug';

	import { ShikiHighlighter } from '$lib/utils/shiki';
	import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
	import Article from '$lib/components/ui/article.svelte';
	import rehypeRaw from 'rehype-raw';

	let { mdContent }: { mdContent: string } = $props();

	const md = $state(mdContent);

	const shikiPlugin = {
		rehypePlugin: [
			rehypeShikiFromHighlighter,
			ShikiHighlighter.getInstance(),
			{ theme: 'kanagawa-wave' }
		]
	} satisfies Plugin;

	const slugPlugin = {
		rehypePlugin: [rehypeSlug]
	} satisfies Plugin;

	const rawPlugin = {
		rehypePlugin: [rehypeRaw]
	} satisfies Plugin;

	const plugins: Plugin[] = [gfmPlugin(), shikiPlugin, rawPlugin, slugPlugin];
</script>

<Article>
	<Markdown {md} {plugins}></Markdown>
</Article>
