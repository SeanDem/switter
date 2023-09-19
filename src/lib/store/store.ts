import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import type { UserPublic } from '$lib/types';

export const user = writable<User | null>(null);
export const userPublic = writable<UserPublic | null>(null);
