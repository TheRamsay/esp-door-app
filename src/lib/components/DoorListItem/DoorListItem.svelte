<script lang="ts">
	import type { Door } from '$lib/models/models';
	import Button from '$components/ui/button/Button.svelte';
	import { goto } from '$app/navigation';

	export let door: Door;
</script>

<div
	class="bg-zinc-800 p-4 rounded-md flex justify-between w-4/5 cursor-pointer"
	on:click={() => goto(`/doors/${door.id}`)}
>
	<div>
		<div class="font-bold">
			{door.about}
		</div>
		<div class="">👑 {door.owner.username}</div>
	</div>
	<Button class="bg-gray-900">unlock</Button>
</div>
