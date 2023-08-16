<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
	import AccessManager from '$lib/components/AccessManager/AccessManager.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	const deleteDoor = async () => {
		const res = await fetch(`http://localhost:3000/api/v1/doors/${$page.params.door_id}`, {
			method: 'DELETE'
		});
	};
</script>

<div>
	<div class="text-xl">
		{data.door.about}
	</div>
	<div>
		<span>owner:</span>
		<span>{data?.door?.owner?.username ?? 'cooo'}</span>
	</div>
	<AccessManager permissions={data.permissions} />
	<div class="flex justify-between">
		<Button class="">unlock</Button>
		<Button on:click={deleteDoor} variant="destructive">delete</Button>
	</div>
</div>
