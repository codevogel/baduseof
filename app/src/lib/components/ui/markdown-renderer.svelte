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

	let { mdContent }: { mdContent: string } = $props();

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

	const plugins: Plugin[] = [gfmPlugin(), shikiPlugin, slugPlugin];
</script>

<Article>
	<Markdown md={mdContent} {plugins}>
		{#snippet a(props)}
			{@const { children, ...rest } = props}
			<a class="text-primary" {...rest}>
				{@render children?.()}
			</a>
		{/snippet}
		{#snippet blockquote(props)}
			{@const { children, ...rest } = props}
			<blockquote class="[&>p]:before:content-none [&>p]:after:content-none" {...rest}>
				{@render children?.()}
			</blockquote>
		{/snippet}
	</Markdown>
</Article>
