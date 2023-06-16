import { writable } from 'svelte/store'
import type { User } from '../models/models';

export const userStore = writable<User | undefined>(
    undefined
);