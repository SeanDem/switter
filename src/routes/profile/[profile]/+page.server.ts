import { getAllSweetDetail } from '$lib/services/sweet/sweet';
import { getUserProfileByUid } from '$lib/services/user/profile';
import { SweetType } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async ({ params, cookies }) => {
	const userProfile = await getUserProfileByUid(params.profile);
	let sweetDetailList = await getAllSweetDetail({
		sweetType: SweetType.SWEET,
		uid: params.profile
	});
	userProfile.uid = params.profile;
	const uid = cookies.get('uid')
	 if (!uid) throw error(300,'User not authenticated');
	return { userProfile, sweetDetailList, uid };
};
