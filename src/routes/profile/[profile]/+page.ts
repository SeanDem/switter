import type { UserProfile } from 'firebase/auth';
import { getUserProfileByUid } from '$lib/services/user/profile';

export const load = async ({ params }): Promise<UserProfile> => {
	const userProfile = await getUserProfileByUid(params.profile);
	return { ...userProfile };
};
