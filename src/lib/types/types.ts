import type { Timestamp } from '@firebase/firestore';
import type { UserInfo } from 'firebase/auth';
import type { FieldValue } from 'firebase/firestore';

export interface UserAction {
	id?: string;
	userUid: string;
	timestamp: Timestamp | FieldValue;
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
	user: UserProfile;
	comments: SweetDetail[];
	isLiked: boolean;
	isReSweeted: boolean;
}
export interface SweetLike extends UserAction {
	sweetId: string;
}

export interface Conversation {
	id?: string;
	userId1: string;
	userId2: string;
	lastMessage: string;
	lastTimestamp: Timestamp | FieldValue;
}

export interface Message {
	id: string;
	senderUid: string;
	text: string;
	timestamp: Timestamp | FieldValue;
}

export interface UserProfile {
	userUid: string;
	userDisplayName: string;
	userProfileUrl: string;
	handle: string;
	bio: string;
	birthday: string;
	followersCount: number;
	followingCount: number;
}

export interface UserProfileAndInfo extends UserProfile, UserInfo {}

export interface UserPrivate {
	userUid: string;
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