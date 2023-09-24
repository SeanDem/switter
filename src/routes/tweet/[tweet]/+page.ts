import { getSweetWithUserInfo } from '$lib/services/sweet/facade';
import type { SweetInfo } from '$lib/types.js';

export const load = async ({ params }): Promise<SweetInfo> => {
	const tweetInfo = await getSweetWithUserInfo(params.tweet);
	return tweetInfo;
};
