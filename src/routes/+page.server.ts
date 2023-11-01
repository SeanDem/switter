import { app, auth } from '$lib/services/firebase.js';
import { getAuth } from 'firebase/auth';

export const load = async ({ cookies }) => {
	const currU = getAuth(app).currentUser;
	const cookiesData = cookies.getAll();
	return {cookiesData, currU}
};
