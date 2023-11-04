import { getUserProfileByUid } from '$lib/services/user/profile.js';
import { error } from '@sveltejs/kit';

export const load = async ({cookies}) => {
	const uid = cookies.get('uid');
	if (!uid) throw error(300,'User not authenticated');
	const userProfile = await getUserProfileByUid(uid);
	userProfile.uid = uid;
	return { userProfile }
};
