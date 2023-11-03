import { getAllSweetDetail } from '$lib/services/sweet/sweet';
import { getUserProfileByUid } from '$lib/services/user/profile';
import { SweetType } from '$lib/types/types';

export const load = async ({ params }) => {
	const userProfile = await getUserProfileByUid(params.profile);
	const sweetDetailList = await getAllSweetDetail({
		sweetType: SweetType.SWEET,
		uid: userProfile.uid
	});
	return { profile: params.profile };
};
