<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$components/ui/button/Button.svelte';
	import type { DoorPermission, User } from '$lib/models/models';

	export let permissions: DoorPermission[];

	console.log(permissions);
</script>

<div>
	<div class="flex justify-between">
		<div>Manage access</div>
		<div class="flex justify-around">
			<Button>logs</Button>
			<Button>add</Button>
		</div>
	</div>
	<div class="flex flex-col items-center">
		{#each permissions as permission}
			<div
				class="flex items-center justify-start bg-neutral-700 p-3 mb-3 rounded-lg w-full"
				on:click={() => goto(`/doors/${permission.door_id}/users/${permission.user_profile_id}`)}
			>
				<img class="rounded-full h-12 mr-2" src={permission.user_profile.avatar} alt="avatar" />
				<div>{permission.user_profile.username}</div>
			</div>
		{/each}
	</div>
</div>
