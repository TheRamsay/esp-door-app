import type { PageLoad } from './$types';
import { getDoor, getDoorPermissions } from '$lib/api/api';
import type { DoorPermission } from '$lib/models/models';

export const load = (async ({ params }) => {
	return {
		permission: { door: { about: "ramsay pelisek" }, user_profile: { username: "theramsay" }, edit_permission: true, open_permission: true } as DoorPermission,
		accesHistory: ["ahoj", "coze", "vooofrr"]
	}
}) satisfies PageLoad;