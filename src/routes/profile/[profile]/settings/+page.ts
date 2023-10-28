import { fetchCurrentUserProfileData } from '$lib/services/user/facade';
import type { UserProfileAndInfo } from '$lib/types/types';

export const load = async (): Promise<UserProfileAndInfo> => {
	return (await fetchCurrentUserProfileData()) as UserProfileAndInfo;
};
