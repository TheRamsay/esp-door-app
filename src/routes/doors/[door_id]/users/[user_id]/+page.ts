import type { PageLoad } from './$types';
import { getDoorAccessHistoryByUser, getUserDoorPermission } from '$lib/apiClient';

export const load = (async ({ params }) => {
	return {
		permission: getUserDoorPermission(+params.door_id, +params.user_id),
		accesHistory: getDoorAccessHistoryByUser(+params.door_id, +params.user_id)
	}
}) satisfies PageLoad;