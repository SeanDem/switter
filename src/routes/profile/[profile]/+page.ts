import { getUserProfileByUid } from '$lib/services/user/profile';
import { getAllSweetDetail } from '$lib/services/sweet/sweet';
import { SweetType } from '$lib/types/types';
import { get } from 'svelte/store';
import { userAuth } from '$lib/store/store';

// export const load = async ({ params }) => {
// 	// const userProfile = await getUserProfileByUid(params.profile);
// 	// const sweetDetailList = await getAllSweetDetail({
// 	// 	sweetType: SweetType.SWEET,
// 	// 	userUid: userProfile.userUid
// 	// });
// 	return { profile: params.profile };
// };
