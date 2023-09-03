<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
	import AccessManager from '$lib/components/AccessManager/AccessManager.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { deleteDoor } from '$lib/apiClient';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const handleDelete = () => {
		deleteDoor(+$page.params.door_id);
		goto("/");
	}
</script>

<div>
	<div class="text-xl">
		{data.door.about}
	</div>
	<div>
		<span>owner:</span>
		<span>{data?.door?.owner?.username ?? 'cooo'}</span>
	</div>
	<AccessManager permissions={data.permissions} doorId={+$page.params.door_id} />
	<div class="flex justify-between">
		<Button class="">unlock</Button>
		<Button on:click={handleDelete} variant="destructive">delete</Button>
	</div>
</div>
