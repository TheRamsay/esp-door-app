<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { userStore } from '../../stores/userStore';
	import { login, logout } from '$lib/api/api';
	import { goto } from '$app/navigation';

	$: logged = $userStore !== undefined;
</script>

<div class="navbar">
	{#if logged}
		<div class="profile">
			<img src={$userStore?.avatar_url} alt="avatar" />
			<span>{$userStore?.username}</span>
		</div>
		<button
			class="logout"
			on:click={() => {
				goto(logout());
			}}>logout</button
		>
	{:else}
		<button
			class="login"
			on:click={() => {
				goto(login());
			}}>prihlas se 🐐</button
		>
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
