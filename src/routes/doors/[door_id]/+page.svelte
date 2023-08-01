<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
	import AccessManager from '$lib/components/AccessManager/AccessManager.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<div class="text-xl">
		{data.door.about}
	</div>
	<div>
		<span>owner:</span>
		<span>ramsay</span>
	</div>
	<AccessManager permissions={data.permissions} />
	<div class="flex justify-between">
		<Button class="bg-red-600">delete</Button>
		<Button class="bg-green-700">unlock</Button>
	</div>
</div>
