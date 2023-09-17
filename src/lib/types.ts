import { user } from './store/store';
import type { Timestamp } from '@firebase/firestore';
import type { User } from 'firebase/auth';
export interface Sweet {
	id: string;
	userId: string;
	text: string;
	timestamp: Timestamp;
	likesCount: number;
	retweetsCount: number;
	commentsCount: number;
}

export interface SweetInfo {
	sweet: Sweet;
	userProfile: UserProfile;
}
export interface Comment {
	userId: string;
	text: string;
	timestamp: Timestamp;
}

export interface UserProfile {
	uid: string;
	handle: string;
	birthday: string;
	phoneNumber: string;
	bio: string;
	followersCount: number;
	followingCount: number;
	profilePicture: Blob;
}

export interface UserPrivate {
	uid: string;
	settings: string;
}

export interface Conversation {
	userId1: string;
	userId2: string;
	lastMessage: string;
	lastTimestamp: Timestamp;
}
