import type { SweetInfo, UserPublic } from '$lib/types';
import { getUserProfileByUid } from '../user/profile';
import { getAllTweets } from './sweet';

export async function getSweetsWithUserInfo(): Promise<SweetInfo[]> {
	const sweets = await getAllTweets();

	const sweetInfos: SweetInfo[] = [];
	for (const sweet of sweets) {
		const userProfile = await getUserProfileByUid(sweet.userUid);
		if (userProfile) {
			sweetInfos.push({
				sweet,
				userProfile
			});
		}
	}

	return sweetInfos;
}
