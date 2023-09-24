import { handle } from './../hooks';
import type { Timestamp } from '@firebase/firestore';
import type { UserInfo } from 'firebase/auth';
import type { FieldValue } from 'firebase/firestore';
export interface Sweet {
	id?: string;
	text: string;
	timestamp?: Timestamp | FieldValue;
	likesCount?: number;
	retweetsCount?: number;
	commentsCount?: number;
	
	userUid: string;
	userDisplayName?: string;
	userProfileUrl?: string;
	handle?: string;
}

export interface SweetInfo {
	sweet: Sweet;
	userPublic: UserPublic;
}

export interface Like {
	userId: string;
}
export interface UserPublic {
	userUid: string;
	userDisplayName?: string;
	userProfileUrl?: string;
	handle: string;
	bio?: string;
	birthday?: string;
	followersCount?: number;
	followingCount?: number;
}

export interface UserProfile extends UserPublic, UserInfo {}

export interface UserPrivate {
	userUid: string;
	settings?: string;
}

export interface Conversation {
	id: string;
	userId1?: string;
	userId2?: string;
	lastMessage?: string;
	lastTimestamp?: Timestamp;
}
