<script lang="ts">
	import type { User } from '$lib/models/models';
	import { getUserAvatarUrl } from '$lib/utils';
	import Select from 'svelte-select/Select.svelte';

	export let value: { value: number; label: string };

	const loadUsers = async (): Promise<{ value: number; label: User }[]> => {
		const res = await fetch('http://localhost:3000/api/v1/users');
		const data: User[] = await res.json();
		return data.map((u) => {
			return {
				value: u.id,
				label: u
			};
		});
	};

	const filterItems = (label: User, filterText: string, option: any) => {
		console.log(label);
		// return label.username.toLowerCase().includes(filterText.toLowerCase());
		return false;
	};
</script>

<Select
	class="col-span-3"
	loadOptions={loadUsers}
	itemFilter={filterItems}
	bind:value
	--list-background="hsl(var(--background))"
	--item-hover-bg="hsl(var(--accent))"
	--border="1px hsl(var(--input)) solid"
	--border-focused="1px hsl(var(--input)) solid"
	--border-hover="1px hsl(var(--input)) solid"
>
	<div class="flex items-center" slot="item" let:item let:index>
		<img class="mr-3 h-[26px] rounded-3xl" src={getUserAvatarUrl(item.label)} alt="gg" />
		{item.label.username}
	</div>
	<div slot="selection" let:selection>
		{selection.label.username}
	</div>
</Select>
