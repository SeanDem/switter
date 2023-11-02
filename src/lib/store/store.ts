import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import type { UserProfile } from '$lib/types/types';

export const userAuthStore = writable<User | null>(null);
export const userProfileStore = writable<UserProfile | null>(null);
