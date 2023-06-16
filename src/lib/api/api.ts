import type { Door, DoorPermission, User } from "$lib/models/models";
import { redirect } from "@sveltejs/kit";

const BACKEND_URL = "https://0794-86-49-224-49.ngrok-free.app/api/v1";

export const getCurrentUser = async (): Promise<User> => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/@me`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
        })

        if (!res.ok) {
            throw Error("KOKOT SI");
        }

        return res.json();

    } catch (e) {
        throw e;
    }
};

export const getDoor = async (door_id: number): Promise<Door> => {
    const data = await fetch(`${BACKEND_URL}/doors/${door_id}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })

    return data.json();
}

export const getDoorPermissions = async (door_id: number): Promise<DoorPermission[]> => {
    const data = await fetch(`${BACKEND_URL}/doors/${door_id}/permissions`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })

    return data.json();
};

export const getUserDoors = async (user_id: number): Promise<Door[]> => {
    const data = await fetch(`${BACKEND_URL}/users/${user_id}/doors`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })

    return data.json();
}

export const login = () => {
    console.log("PRihlasuju se");
    return `${BACKEND_URL}/auth/discord`;
};

export const logout = () => {
    return `${BACKEND_URL}/logout`;
};