import { userStore } from '$lib/stores/userStore';
import { get } from 'svelte/store';
import type { LayoutLoad, PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getCurrentUser, getUserDoors, login } from '$lib/api/api';

export const load: LayoutLoad = (async () => {
    console.log("Layout load");
    try {
        const user = await getCurrentUser();
        userStore.set(user);
    } catch {
        console.log('User not found');
    }
}) satisfies PageLoad;