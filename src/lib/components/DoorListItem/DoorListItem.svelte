<script lang="ts">
	import type { Door } from '$lib/models/models';
	import Button from '$components/ui/button/Button.svelte';
	import { goto } from '$app/navigation';

	export let door: Door;
</script>

<div
	class="bg-zinc-800 p-4 rounded-md flex justify-between w-full cursor-pointer my-2 w-full"
	on:click={() => goto(`/doors/${door.id}`)}
>
	<div>
		<div class="font-bold">
			{door.about}
		</div>
		<div class="">👑 {door.owner.username}</div>
	</div>
	<Button>unlock</Button>
</div>
