import { getUserProfileByUid } from '$lib/services/user/profile';
import { getAllSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType } from '$lib/types';
import { get } from 'svelte/store';
import { userAuth } from '$lib/store/store';

export const load = async ({ params }) => {
	const userUid = get(userAuth)?.uid;
	const userProfile = await getUserProfileByUid(params.profile);
	const sweetDetailList = await getAllSweetDetail({
		sweetType: SweetType.SWEET,
		userUid: userProfile.userUid
	});
	return { userProfile, sweetDetailList };
};
