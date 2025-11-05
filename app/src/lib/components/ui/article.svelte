<script lang="ts">
	let { children } = $props();
</script>

<article class="mx-auto my-8 prose max-w-lg px-8 dark:prose-invert prose-blockquote:border-primary">
	{@render children()}
</article>
