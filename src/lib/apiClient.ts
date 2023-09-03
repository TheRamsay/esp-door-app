import type { Door, DoorPermission, PostDoor, PostDoorPermission, User } from "$lib/models/models";
import type { HttpMethod } from "@sveltejs/kit/types/private";
import { PUBLIC_API_URL } from "$env/static/public";

export async function fetchWithDefaults(url: string, options?: RequestInit): Promise<any> {
    const res = await fetch(`${PUBLIC_API_URL}${url}`, {
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    });

    if (!res.ok) {
        console.error(await res.json())
        throw new Error("Request failed")
    }

    return res.json();
}

export function fetchByMethod(url: string, method: HttpMethod, options?: RequestInit): Promise<any> {
    return fetchWithDefaults(url, {
        ...options,
        method: method,
    });
}

export function _get(url: string, options?: RequestInit): Promise<any> {
    return fetchByMethod(url, "GET", options);
}

export function _post(url: string, body?: any, options?: RequestInit): Promise<any> {
    console.info(`[POST] url: ${url} | body: ${JSON.stringify(body)}`)
    return fetchByMethod(url, "POST", {
        ...options,
        body: JSON.stringify(body)
    });
}

export function _delete(url: string, options?: RequestInit): Promise<any> {
    return fetchByMethod(url, "DELETE", options);
}

export function deleteDoor(doorId: number): Promise<any> {
    return _delete(`/doors/${doorId}`)
}

export function saveDoor(door: PostDoor): Promise<any> {
    return _post("/doors", door);
}

export function getCurrentUser(): Promise<User> {
    return _get("/users/@me");
}

export function getUsers(): Promise<User[]> {
    return _get(`/users`);
}

export function getDoor(doorId: number): Promise<Door> {
    return _get(`/doors/${doorId}`);
}

export function getDoorPermissions(doorId: number): Promise<DoorPermission[]> {
    return _get(`/doors/${doorId}/permissions`);
}

export function getUserDoors(userId: number): Promise<Door[]> {
    return _get(`/users/${userId}/doors`);
}

export function getDoorAccessHistoryByUser(doorId: number, userId: number): Promise<Door[]> {
    return _get(`/doors/${doorId}/access_history/${userId}`);
}

export function getUserDoorPermission(doorId: number, userId: number): Promise<DoorPermission> {
    return _get(`/doors/${doorId}/permissions/${userId}`);
}

export function saveDoorPermission(doorPermission: PostDoorPermission): Promise<any> {
    return _post(`/doors/${doorPermission.door_id}/permissions`, doorPermission);
}

export function deleteDoorPermission(doorId: number, userId: number): Promise<any> {
    return _delete(`/doors/${doorId}/permissions/${userId}`);
}

export const LoginRedirect = () => {
    return `${PUBLIC_API_URL}/auth/discord`;
};

export const LogoutRedirect = () => {
    return `${PUBLIC_API_URL}/logout`;
};