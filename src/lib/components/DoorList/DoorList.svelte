<script lang="ts">
	import type { Door } from '$lib/models/models';
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
	import UserSelect from '$components/UserSelect/UserSelect.svelte';
	import { saveDoor } from '$lib/apiClient';

	export let doors: Door[];

	let open = false;
	let about: string;
	let userId: { value: number; label: string };

	const handleSave = async () => {
		await saveDoor({
			owner_id: userId.value,
			about: about
		});

		open = false;
	};
</script>

<div class="flex justify-center">
	<div class="w-4/5">
		<div class="flex justify-between w-full mb-10">
			<div class="text-3xl">Pelíšky</div>
			<Dialog modal={true} {open}>
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
							<UserSelect bind:value={userId} />
						</div>
					</div>
					<DialogFooter>
						<Button on:click={handleSave} type="submit">Save</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
		<div class="flex flex-col items-center w-full">
			{#if doors.length > 0}
				{#each doors as door}
					<DoorListItem {door} />
				{/each}
			{:else}
				<div class="mt-5 text-2xl">Create your first Pelíšek</div>
			{/if}
		</div>
	</div>
</div>
