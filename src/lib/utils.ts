import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { User } from "./models/models";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getUserAvatarUrl = (user: User) => {
  return `https://cdn.discordapp.com/avatars/${user.discord_id}/${user.avatar || 'idk'}.webp`;
}