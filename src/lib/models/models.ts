export type User = {
    id: number,
    username: string,
    avatar: string | null,
    discord_id: string
};

export type Door = {
    id: number,
    about: string,
    owner: User
}

export type DoorPermission = {
    door_id: number,
    user_profile: User,
    edit_permission: boolean,
    open_permission: boolean
};