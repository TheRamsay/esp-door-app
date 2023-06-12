<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { userStore } from '../../stores/userStore';

	$: logged = $userStore !== undefined;

	const login = () => {
		throw redirect(302, '/api/v1/auth/discord');
	};
</script>

<div class="navbar">
	{#if logged}
		<div class="profile">
			<img src={$userStore.avatar_url} alt="avatar" />
			<span>{$userStore.username}</span>
		</div>
	{:else}
		<button class="login" on:click={login}>prihlas se 🐐</button>
	{/if}
</div>

<style>
	.navbar {
		margin-bottom: 20px;
		padding: 15px;
	}

	.profile {
		display: flex;
		align-items: center;
	}

	img {
		border-radius: 50px;
		margin-right: 10px;
		height: 42px;
	}
</style>
