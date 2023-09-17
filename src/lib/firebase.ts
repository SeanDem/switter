import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyDyxYCVc7Q9iS0f7udYiscLrGbcjxA4ccg',
	authDomain: 'switter-c8c87.firebaseapp.com',
	projectId: 'switter-c8c87',
	storageBucket: 'switter-c8c87.appspot.com',
	messagingSenderId: '865202535032',
	appId: '1:865202535032:web:5cb519334a835bff940b8d',
	measurementId: 'G-W3D2KDNHQ3'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
