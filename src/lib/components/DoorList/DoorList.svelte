<script lang="ts">
	import type { Door } from '$lib/models/models';
	import DoorListItem from '../DoorListItem/DoorListItem.svelte';

	export let doors: Door[];
</script>

<div class="door-list">
	<div class="door-list-header">
		<div class="door-list-title">Pelíšky</div>
		<div class="add-door-button">add</div>
	</div>
	<div class="door-list-items">
		{#each doors as door}
			<DoorListItem {door} />
		{/each}
	</div>
</div>

<style>
    .door-list {
        margin: 0 20px;
    }
	.add-door-button {
		text-transform: uppercase;
	}

	.door-list-title {
		font-weight: bold;
		font-size: 24px;
        margin-bottom: 60px;
	}

    .door-list-header {
        display: flex;
        justify-content: space-between;
        margin: 0px 15px;
    }

	.add-door-button {
		background-color: #71bb65;
        color: black;
		border-radius: 5px;
		height: 36px;
		width: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
