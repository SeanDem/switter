import { getFollowing } from "$lib/services/follow/followService.js";

export const load = async ({ params }) => {
    const followersList = await getFollowing(params.profile);
    return { followersList };
};