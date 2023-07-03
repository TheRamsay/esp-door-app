import type { User } from "./models/models";

export const getUserAvatarUrl = (user: User) => {
    return `https://cdn.discordapp.com/avatars/${user.discord_id}/${user.avatar || 'idk'}.webp`;
}