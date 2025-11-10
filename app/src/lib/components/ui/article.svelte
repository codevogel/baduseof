<script lang="ts">
	let { children } = $props();
</script>

<article
	class="mx-auto prose max-w-3xl rounded-lg border bg-background p-8 shadow-2xl dark:prose-invert prose-a:text-primary prose-blockquote:border-primary prose-blockquote:[&>p]:before:content-none"
>
	{@render children()}
</article>
