<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
	import Label from '$components/ui/label/Label.svelte';
	import Switch from '$components/ui/switch/Switch.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { deleteDoorPermission } from '$lib/apiClient';

	export let data: PageData;

	let changedData = false;
</script>

<div class="text-gray-300 m-10">
	<p class="text-2xl font-bold">User detail</p>
	<div>
		<div class="mb-1">
			<span class="font-bold">name: </span>
			<span>{data.permission.door.about}</span>
		</div>
		<div class="mb-1">
			<span class="font-bold">user: </span>
			<span>{data.permission.user_profile.username}</span>
		</div>
		<div class="flex items-center mb-1 space-x-2">
			<span class="font-bold">open: </span>
			<Switch rootChecked={data.permission.open_permission} id="airplane-mode" />
		</div>
		<div class="flex items-center mb-1 space-x-2">
			<span class="font-bold">edit: </span>
			<Switch rootChecked={data.permission.edit_permission} id="airplane-mode" />
		</div>
	</div>
	<div class="mt-8">
		<p class="text-xl font-semibold">Access history</p>
		<div>
			{#each data.accesHistory as log}
				<div class="flex items-start bg-zinc-800 p-4 my-3 rounded-md">
					<img
						class="mr-4 rounded-full h-12 bg-foreground"
						src="https://cdn.discordapp.com/avatars/172051086071300096/5ae3fc7a6014e3aa77e84d7004a64963.webp"
					/>
					<div>
						<p class="text-lg font-semibold">Padak</p>
						<p>15:03:13 22.12.2023</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="mt-8 flex justify-between">
		<Button disabled={changedData}>save</Button>
		<Button variant="destructive" on:click={() => deleteDoorPermission(+$page.params.door_id, +$page.params.user_id)}>delete</Button>
	</div>
</div>
