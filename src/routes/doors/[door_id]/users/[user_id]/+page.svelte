<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
	import Label from '$components/ui/label/Label.svelte';
	import Switch from '$components/ui/switch/Switch.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let changedData = false
</script>

<div>
	<h1>User detail</h1>
	<div>
		<div>
			<span>name: </span>
			<span>{data.permission.door.about}</span>
		</div>
		<div>
			<span>user: </span>
			<span>{data.permission.user_profile.username}</span>
		</div>
		<div class="flex items-center space-x-2">
			<Switch rootChecked={data.permission.open_permission} id="airplane-mode" />
			<Label for="airplane-mode">open permission</Label>
		</div>
		<div class="flex items-center space-x-2">
			<Switch rootChecked={data.permission.edit_permission} id="airplane-mode" />
			<Label for="airplane-mode">edit permission</Label>
		</div>
	</div>
	<div>
		<h2>Access history</h2>
		<div>
			{#each data.accesHistory as log}
				<div>2020-01-31</div>
			{/each}
		</div>
	</div>
	<div>
		<Button disabled={changedData}>save</Button>
		<Button >delete</Button>
	</div>
</div>
