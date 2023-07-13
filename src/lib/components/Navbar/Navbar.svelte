<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { userStore } from '../../stores/userStore';
	import { login, logout } from '$lib/api/api';
	import { goto } from '$app/navigation';
	import { getUserAvatarUrl } from '$lib/utils';
	import { Button } from '$components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$components/ui/avatar';
	$: logged = $userStore !== undefined;
</script>

<div class="navbar">
	{#if logged && $userStore}
		<div class="profile">
			<span>{$userStore?.username}</span>
			<Avatar>
				<AvatarImage src={getUserAvatarUrl($userStore)} alt="@shadcn" />
				<AvatarFallback>Coooo</AvatarFallback>
			</Avatar>
		</div>
		<Button variant="outline" on:click={() => goto(logout())}>AHOJ 🙋‍♂️</Button>
	{:else}
		<Button variant="outline" on:click={() => goto(login())}>prihlas se 🐐</Button>
	{/if}
</div>

<style>
	/* .navbar {
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
	} */
</style>
