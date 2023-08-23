// Import required Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDyxYCVc7Q9iS0f7udYiscLrGbcjxA4ccg',
	authDomain: 'switter-c8c87.firebaseapp.com',
	projectId: 'switter-c8c87',
	storageBucket: 'switter-c8c87.appspot.com',
	messagingSenderId: '865202535032',
	appId: '1:865202535032:web:5cb519334a835bff940b8d',
	measurementId: 'G-W3D2KDNHQ3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
const functions = getFunctions(app);
const auth = getAuth(app);

// If running on localhost, connect to the Firestore emulator
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
	connectFirestoreEmulator(db, 'localhost', 8080);
	connectAuthEmulator(getAuth(app), 'http://localhost:9099');
	connectFunctionsEmulator(functions, 'localhost', 5001); // Default port for functions emulator is 5001
}

export { db, app };
