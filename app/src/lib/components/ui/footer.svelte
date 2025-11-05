<script lang="ts">
	import CodevogelHeadLogo from '$lib/assets/logos/svg/logo-codevogel-head.svg';
	import { Button } from '$lib/components/ui/button';
</script>

<footer class="h-16 bg-background shadow-2xl">
	<div class="flex h-full items-center justify-center border-t px-4 text-sm text-muted-foreground">
		<strong class="pe-1">Bad Use Of</strong> is a project by
		<Button variant="link" class="mx-0 px-1" href="https://codevogel.com/">
			codevogel
			<img src={CodevogelHeadLogo} class="h-6" alt="Logo codevogel Head" />
		</Button>
	</div>
</footer>
