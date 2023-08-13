<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { userStore } from '../../stores/userStore';
	import { login, logout } from '$lib/api/api';
	import { goto } from '$app/navigation';
	import { getUserAvatarUrl } from '$lib/utils';
	import { Button } from '$components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$components/ui/avatar';
	import { page } from '$app/stores';
	import { LogOut } from 'lucide-svelte';
</script>

<div class="flex justify-between mb-10">
	{#if $page.data.user}
		<Button on:click={() => goto(logout())}>Logout<LogOut class="ml-2 h-4 w-4" /></Button>
		<div class="flex items-center cursor-pointer">
			<span class="mr-2 font-semibold text-orange-400">{$page.data.user.username}</span>
			<Avatar>
				<AvatarImage src={getUserAvatarUrl($page.data.user)} alt="@shadcn" />
				<AvatarFallback>Coooo</AvatarFallback>
			</Avatar>
		</div>
	{/if}
</div>
