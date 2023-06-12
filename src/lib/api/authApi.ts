import type { User } from "$lib/models/models";

const BACKEND_URL = "http://127.0.0.1:3000/api/v1";

export const getCurrentUser = async (): Promise<User> => {
    const data = await fetch(`${BACKEND_URL}/users/@me`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })

    return data.json();
};