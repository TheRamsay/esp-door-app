import { userStore } from '$lib/stores/userStore';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getUserDoors, login } from '$lib/api/api';

export const load = (async () => {
    const user = get(userStore);
    if (user) {

        return {
            doors: await getUserDoors(user.id)
        };
    };

    return {
        doors: []
    };
}) satisfies PageLoad;