import type { Handle } from '@sveltejs/kit'

const BACKEND_URL = "http://localhost:3000/api/v1";

export const handle: Handle = async ({ event, resolve }) => {
    // get cookies from browser
    const session = event.cookies.get('SESSION')

    if (!session) {
        // if there is no session load page as normal
        return await resolve(event)
    }

    const res = await fetch(`${BACKEND_URL}/users/@me`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `SESSION=${session}`
        },
        credentials: "include"
    })

    if (res.ok) {
        event.locals.user = await res.json()
    } else {
        event.locals.user = null;
    }

    // load page as normal
    return await resolve(event)
}
