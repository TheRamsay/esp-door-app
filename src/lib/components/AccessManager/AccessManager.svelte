<script lang="ts">
	import type { User } from '$lib/models/models';

	export let users: User[];
</script>

<div>
	<div class="header">
		<div class="title">Manage access</div>
		<div class="add">add</div>
	</div>
	<div class="items">
		{#each users as user}
			<div class="item">
				<img src={user.avatar_url} alt="avatar" />
				<div class="username">{user.username}</div>
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
