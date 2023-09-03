export type User = {
    id: number,
    username: string,
    avatar?: string,
    discord_id: string
};

export type PostUser = Omit<User, "id"> & { id?: number };

export type Door = {
    id: number,
    about: string,
    owner_id: number,
    owner: User
}

export type PostDoor = Omit<Door, "id" | "owner"> & { id?: number };

export type DoorPermission = {
    door_id: number,
    user_profile_id: number,
    user_profile: User,
    door: Door,
    edit_permission: boolean,
    open_permission: boolean
};

export type PostDoorPermission = Omit<DoorPermission, "id" | "user_profile" | "door"> & { id?: number };