import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import type { UserProfile } from '$lib/types';

export const userAuth = writable<User | null>(null);
export const userProfile = writable<UserProfile | null>(null);
