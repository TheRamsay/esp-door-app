export type User = {
    id: number,
    username: string,
    avatar_url: string,
    discord_id: string
};

export type Door = {
    id: number,
    about: string,
    owner: User
}