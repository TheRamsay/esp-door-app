<script lang="ts">
	import type { Door, User } from '$lib/models/models';
	import DoorListItem from '../DoorListItem/DoorListItem.svelte';
	import { Button, buttonVariants } from '$components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$components/ui/dialog';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import Select from 'svelte-select';
	import { getUserAvatarUrl } from '$lib/utils';
	import UserSelect from '$components/UserSelect/UserSelect.svelte';

	export let doors: Door[];

	let about: string;
	let userId: { value: number; label: string };

	const saveDoor = async () => {
		const res = await fetch('http://localhost:3000/api/v1/doors', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				owner_id: userId.value,
				about: about
			})
		});
	};
</script>

<div class="flex justify-center">
	<div class="w-4/5">
		<div class="flex justify-between w-full mb-10">
			<div class="text-3xl">Pelíšky</div>
			<Dialog modal={true}>
				<DialogTrigger class={buttonVariants({ variant: 'default' })}>Add</DialogTrigger>
				<DialogContent class="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add pelíšek</DialogTitle>
						<DialogDescription />
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-4 items-center gap-4">
							<Label class="text-right">Name</Label>
							<Input bind:value={about} id="name" class="col-span-3" />
							<Label class="text-right">Owner</Label>
							<UserSelect />
						</div>
					</div>
					<DialogFooter>
						<Button on:click={saveDoor} type="submit">Save</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
		<div class="flex flex-col items-center w-full">
			{#each doors as door}
				<DoorListItem {door} />
			{/each}
		</div>
	</div>
</div>
