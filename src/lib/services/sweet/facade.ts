import { userPublic } from './../../store/store';
import type { SweetInfo, UserPublic } from '$lib/types';
import { getUserProfileByUid } from '../user/profile';
import { getAllTweets, getTweet } from './sweet';

export async function getSweetsWithUserInfo(): Promise<SweetInfo[]> {
	const sweets = await getAllTweets();

	const sweetInfos: SweetInfo[] = [];
	for (const sweet of sweets) {
		const userProfile = await getUserProfileByUid(sweet.userUid);
		if (userProfile) {
			sweetInfos.push({
				sweet,
				userPublic: userProfile
			});
		}
	}

	return sweetInfos;
}

export async function getSweetWithUserInfo(uid: string): Promise<SweetInfo> {
	const sweet = await getTweet(uid);
	const userPublic: UserPublic = await getUserProfileByUid(sweet.userUid);
	return { sweet, userPublic };
}
