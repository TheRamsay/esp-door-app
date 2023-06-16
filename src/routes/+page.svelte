<script lang="ts">
	import DoorList from '$lib/components/DoorList/DoorList.svelte';
	import { userStore } from '$lib/stores/userStore';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{#if $userStore !== undefined}
		<DoorList doors={data.doors || []} />
	{:else}
		cooooooo?
	{/if}
</div>
