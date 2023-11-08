import { getFollowers } from '$lib/services/userProfile/userProfileService.js';

export const load = async ({ params }) => {
	const followersList = await getFollowers(params.profile);
	return { followersList };
};
