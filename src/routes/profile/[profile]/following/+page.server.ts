import { getFollowing } from '$lib/services/userProfile/userProfileService.js';

export const load = async ({ params }) => {
	const followersList = await getFollowing(params.profile);
	return { followersList };
};
