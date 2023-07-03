<script lang="ts">
	import type { Door } from '$lib/models/models';
	import { userStore } from '$lib/stores/userStore';
	// import LockOpen from 'svelte-material-icons/LockOpen.svelte';

	export let door: Door;
</script>

<div class="door-list-item">
	<div class="item-info">
		<div class="door-name">
			{door.about}
		</div>
		<!-- TODO: Nebrat to z userStore ale z owner objektu -->
		<div class="door-owner">👑 {$userStore?.username}</div>
	</div>
	<!-- <div class="unlock-button"><LockOpen color={'black'} height={'24'} width={'24'} /></div> -->
</div>

<style>
	.door-list-item {
		background-color: #353434;
		border-radius: 5px;
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		padding: 10px;
		height: 52px;
		cursor: pointer;
		line-height: 1.5rem;
	}

	.item-info {
		width: 90%;
	}
	.door-name {
		font-size: 16px;
		font-weight: bold;
	}

	.door-owner {
		font-size: 15px;
	}

	.unlock-button {
		background-color: #71bb65;
		border-radius: 5px;
		height: 36px;
		width: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.unlock-button:hover {
		background-color: #44863a;
	}
</style>
