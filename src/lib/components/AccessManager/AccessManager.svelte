<script lang="ts">
	import type { DoorPermission, User } from '$lib/models/models';

	export let permissions: DoorPermission[];
</script>

<div>
	<div class="header">
		<div class="title">Manage access</div>
		<div class="add">add</div>
	</div>
	<div class="items">
		{#each permissions as permission}
			<div class="item">
				<img src={permission.user_profile.avatar_url} alt="avatar" />
				<div class="username">{permission.user_profile.username}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
	}

	.title {
		font-weight: bold;
	}

	.add {
		background-color: #71bb65;
	}

	.item {
		display: flex;
		align-items: center;
	}

	img {
		height: 33px;
		width: 33px;
		border-radius: 15px;
	}
</style>
