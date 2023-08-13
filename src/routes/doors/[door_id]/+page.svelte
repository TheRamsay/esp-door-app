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
		<span>{data?.door?.owner?.username ?? 'cooo'}</span>
	</div>
	<AccessManager permissions={data.permissions} />
	<div class="flex justify-between">
		<Button variant="destructive">delete</Button>
		<Button class="">unlock</Button>
	</div>
</div>
