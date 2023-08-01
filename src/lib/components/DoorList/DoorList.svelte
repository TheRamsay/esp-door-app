<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
	import type { Door } from '$lib/models/models';
	import DoorListItem from '../DoorListItem/DoorListItem.svelte';

	export let doors: Door[];
</script>

<div>
	<div class="flex justify-between">
		<div class="text-xl">Pelíšky</div>
		<Button class="bg-green-600 text-zinc-900">add</Button>
	</div>
	<div class="flex flex-col items-center">
		{#each doors as door}
			<DoorListItem {door} />
		{/each}
	</div>
</div>
