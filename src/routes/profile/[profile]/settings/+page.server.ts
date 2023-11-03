import { getUserProfileByUid } from '$lib/services/user/profile.js';

export const load = async ({cookies}) => {
	const uid = cookies.get('uid');
	if (!uid) throw new Error('User not authenticated');
	const userProfile = await getUserProfileByUid(uid);
	return { userProfile }
};
