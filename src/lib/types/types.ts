import type { Timestamp } from '@firebase/firestore';
import type { FieldValue } from 'firebase/firestore';

type SweetTimestamp = Timestamp | FieldValue | Date
export interface UserAction {
	id?: string;
	uid: string;
	timestamp: SweetTimestamp;
}

export interface Counters {
	likesCount: number;
	retweetsCount: number;
	commentsCount: number;
}

export interface Sweet extends UserAction {
	refSweetId?: string;
	type: SweetType;
	text: string;
	likesCount: number;
	retweetsCount: number;
	commentsCount: number;
}

export interface SweetDetail {
	sweet: Sweet;
	user: UserProf;
	comments: SweetDetail[];
	isLiked: boolean;
	isReSweeted: boolean;
	isCommented: boolean;
}

export interface SweetLike extends UserAction {
	sweetId: string;
}

export interface Conversation {
	id?: string;
	userId1: string;
	userId2: string;
	lastMessage: string;
	lastTimestamp: SweetTimestamp;
}

export interface Message {
	id: string;
	uid: string;
	text: string;
	timestamp: SweetTimestamp;
}

export interface UserProf {
	uid: string;
	displayName?: string;
	profileUrl: string;
	handle?: string;
	bio: string;
	birthday: string;
	email?: string;
	phoneNumber?: number;
	followersCount: number;
	followingCount: number;
}

export interface UserPrivate {
	uid: string;
	settings?: string;
}

export enum SweetType {
	SWEET = 'sweet',
	RE_SWEET = 'reSweet',
	COMMENT = 'comment'
}

export enum SWEETS_SUBCOLLECTION {
	LIKERS = 'likers',
	COMMENTERS = 'commenters',
	RETWEETERS = 'resweeters'
}