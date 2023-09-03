import { getDoor, getDoorPermissions } from '$lib/apiClient';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    return {
        door: getDoor(+params.door_id),
        permissions: getDoorPermissions(+params.door_id)
    }
}) satisfies PageLoad;