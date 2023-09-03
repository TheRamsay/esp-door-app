<script lang="ts">
	import { goto } from '$app/navigation';
	import UserSelect from '$components/UserSelect/UserSelect.svelte';
	import { buttonVariants } from '$components/ui/button';
	import Button from '$components/ui/button/Button.svelte';
	import { Dialog, DialogTrigger } from '$components/ui/dialog';
	import DialogContent from '$components/ui/dialog/DialogContent.svelte';
	import DialogDescription from '$components/ui/dialog/DialogDescription.svelte';
	import DialogFooter from '$components/ui/dialog/DialogFooter.svelte';
	import DialogHeader from '$components/ui/dialog/DialogHeader.svelte';
	import DialogTitle from '$components/ui/dialog/DialogTitle.svelte';
	import Input from '$components/ui/input/Input.svelte';
	import Label from '$components/ui/label/Label.svelte';
	import Switch from '$components/ui/switch/Switch.svelte';
	import { saveDoorPermission } from '$lib/apiClient';
	import type { DoorPermission, User } from '$lib/models/models';
	import { getUserAvatarUrl } from '$lib/utils';

	export let permissions: DoorPermission[];
	export let doorId: number;

	let selectedUser: { value: number; label: string };
	let openPermission: boolean;
	let editPermission: boolean;
</script>

<div class="min-h-[100px] bg-slate-500 p-4 rounded-sm my-4">
	<div class="flex justify-between">
		<div class="text-xl">Manage access</div>
		<div class="flex justify-around">
			<Button class="mr-4">logs</Button>
			<Dialog modal={true}>
				<DialogTrigger class={buttonVariants({ variant: 'default' })}>Add</DialogTrigger>
				<DialogContent class="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add pelíšek access</DialogTitle>
						<DialogDescription />
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-4 items-center gap-4">
							<Label class="text-right">User</Label>
							<UserSelect bind:value={selectedUser} />
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label class="text-right">Open</Label>
							<Switch bind:rootChecked={openPermission} />
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label class="text-right">Edit</Label>
							<Switch bind:rootChecked={editPermission} />
						</div>
					</div>
					<DialogFooter>
						<Button
							on:click={() =>
								saveDoorPermission({
									user_profile_id: selectedUser.value,
									door_id: doorId,
									open_permission: openPermission,
									edit_permission: editPermission
								})}
							type="submit">Save</Button
						>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	</div>
	<div class="mt-4 flex flex-col items-center">
		{#each permissions as permission}
			<div
				class="flex items-center justify-start bg-neutral-700 p-3 mb-3 rounded-lg w-full cursor-pointer"
				on:click={() => goto(`/doors/${permission.door_id}/users/${permission.user_profile_id}`)}
			>
				<img
					class="rounded-full h-12 mr-2"
					src={getUserAvatarUrl(permission.user_profile)}
					alt="avatar"
				/>
				<div>{permission.user_profile.username}</div>
			</div>
		{/each}
	</div>
</div>
