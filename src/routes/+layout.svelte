<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	function signout() {
		supabase.auth.signOut();
	}

    import "@fontsource/roboto";
</script>

{#if session}
    <div>
        <img src={session.user.user_metadata.avatar_url} alt="avatar" height="90">
        <p>{session.user.user_metadata.name}</p>
        <button on:click={signout}>Sign out</button>
    </div>
{/if}

<slot />

<style>
    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 80px;
    }

    :global(body) {
        background-color: #18181b;
        color: #a1a1aa;
        font-family: 'Roboto', sans-serif;
    }

    :global(button) {
        appearance: none;
        background-color: #045d99;
        border: 1px solid rgba(27, 31, 35, .15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
        box-sizing: border-box;
        color: #d4d0d0;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 6px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
    }
</style>