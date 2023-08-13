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
	import type { DoorPermission, User } from '$lib/models/models';
	import Select from 'svelte-select/Select.svelte';

	export let permissions: DoorPermission[];

	const saveAccess = () => {};

	console.log(permissions);
</script>

<div class="min-h-[100px]">
	<div class="flex justify-between">
		<div>Manage access</div>
		<div class="flex justify-around">
			<Button>logs</Button>
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
							<UserSelect />
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label class="text-right">Open</Label>
							<Switch />
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label class="text-right">Edit</Label>
							<Switch />
						</div>
					</div>
					<DialogFooter>
						<Button on:click={saveAccess} type="submit">Save</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
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
