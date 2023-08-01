<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$components/ui/button/Button.svelte';
	import Label from '$components/ui/label/Label.svelte';
	import { login } from '$lib/api/api';
	import DoorList from '$lib/components/DoorList/DoorList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{#if $page.data.user}
		<DoorList doors={data.doors || []} />
	{:else}
		<div class="flex flex-col items-center justify-center">
			<div class="text-3xl mb-6">Welcome to my pelíšek</div>
			<Label class="text-xl mb-5">You most log in to continue</Label>
			<Button on:click={() => goto(login())}>Login in</Button>
		</div>
	{/if}
</div>
