import { doc } from '@firebase/firestore';
import { db } from './firebase';
import { collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const userId = 'some_user_id';
const tweetText = 'This is a sample tweet.';

export function getCurrentUserId() {
	const auth = getAuth();
	const user = auth.currentUser;

	return user ? user.uid : null;
}

export async function addTweet() {
	const userDoc = doc(db, 'users', userId);
	const tweetsCollection = collection(userDoc, 'tweets');

	const docRef = await addDoc(tweetsCollection, {
		text: tweetText,
		timestamp: Timestamp.now()
	});
}

export async function getTweets(userId: string) {
	const userDoc = doc(db, 'users', userId);
	const tweetsCollection = collection(userDoc, 'tweets');

	const tweetSnapshot = await getDocs(tweetsCollection);

	const tweets: any = [];
	tweetSnapshot.forEach((doc) => {
		tweets.push({
			id: doc.id,
			...doc.data()
		});
	});

	return tweets;
}
