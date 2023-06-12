<script lang="ts">
	import { page } from '$app/stores';
	import AccessManager from '$lib/components/AccessManager/AccessManager.svelte';
	import type { User } from '$lib/models/models';

	let users: User[] = [
		{
			id: 1,
			username: 'PadakBahnak',
			discord_id: '1',
			avatar_url:
				'https://cdn.discordapp.com/avatars/314659552505102347/670d84f30859f08730b21f1ea3ea0339.webp?size=80'
		},
		{
			id: 2,
			username: 'PetraHovnak',
			discord_id: '1',
			avatar_url:
				'https://cdn.discordapp.com/avatars/314659552505102347/670d84f30859f08730b21f1ea3ea0339.webp?size=80'
		},
		{
			id: 3,
			username: 'siro',
			discord_id: '1',
			avatar_url:
				'https://cdn.discordapp.com/avatars/314659552505102347/670d84f30859f08730b21f1ea3ea0339.webp?size=80'
		}
	];
</script>

<div>
	<div class="door-detail-title" />
	<div class="row">
		<div class="field">name:</div>
		<div class="value">Ramsay</div>
	</div>
	<div class="row">
		<div class="field">owner:</div>
		<div class="value">Ramsay</div>
	</div>
	<AccessManager {users} />
	<div class="controls">
		<div class="button">open</div>
		<div class="button delete">delete</div>
	</div>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
	}
	.field {
		font-weight: bold;
		color: #9d9d9d;
		margin-right: 5px;
	}
	.controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #71bb65;
		color: black;
		text-transform: uppercase;
		border-radius: 5px;
		height: 38px;
		width: 102px;
	}

	.delete {
		background-color: #bb6565;
	}
</style>
