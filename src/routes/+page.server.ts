import { getUserDoors } from '$lib/apiClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.user) {
        return {
            doors: getUserDoors(locals.user.id)
        };
    };

    return {
        doors: []
    };
};