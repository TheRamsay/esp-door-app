import { userStore } from '$lib/stores/userStore';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { getDoor, getDoorPermissions } from '$lib/api/api';

export const load = (async ({ params }) => {
    return {
        door: await getDoor(+params.door_id),
        permissions: await getDoorPermissions(+params.door_id)
    }
}) satisfies PageLoad;