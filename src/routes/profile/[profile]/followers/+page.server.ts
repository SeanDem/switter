import { getFollowers } from "$lib/services/follow/followService.js";

export const load = async ({ params }) => {
    const followersList = await getFollowers(params.profile);
    return { followersList };
};