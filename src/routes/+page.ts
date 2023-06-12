import type { PageLoad } from './$types';

const BACKEND_URL = "http://127.0.0.1:3000/api/v1";

export const load = (async ({ fetch, params }) => {
    const res = await fetch(`${BACKEND_URL}/doors/`);

    return {
        doors: await res.json()
    };
}) satisfies PageLoad;