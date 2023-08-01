<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { userStore } from '../../stores/userStore';
	import { login, logout } from '$lib/api/api';
	import { goto } from '$app/navigation';
	import { getUserAvatarUrl } from '$lib/utils';
	import { Button } from '$components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$components/ui/avatar';
	import { page } from '$app/stores';
</script>

<div class="flex justify-between mb-10">
	{#if $page.data.user}
		<Button variant="outline" on:click={() => goto(logout())}>Logout 🙋‍♂️</Button>
		<div class="flex items-center">
			<span class="mr-2 font-semibold text-orange-400">{$page.data.user.username}</span>
			<Avatar>
				<AvatarImage src={$page.data.user.avatar} alt="@shadcn" />
				<AvatarFallback>Coooo</AvatarFallback>
			</Avatar>
		</div>
	{/if}
</div>

