import { where } from '@firebase/firestore';
import { auth } from '$lib/firebase';
import { query, type QuerySnapshot } from 'firebase/firestore';

export function handleFirestoreError(callback: () => Promise<any>): Promise<any> {
	try {
		return callback();
	} catch (error) {
		console.error('Firestore Error:', error);
		throw error;
	}
}

export function HandleFirestoreError(
	target: Object,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value;
	descriptor.value = async function (...args: any[]) {
		try {
			return await originalMethod.apply(this, args);
		} catch (error) {
			console.error('Firestore Error:', error);
			throw error;
		}
	};
	return descriptor;
}

export function isUserAuth() {
	if (!auth.currentUser) {
		throw new Error('User not authenticated');
	}
}

export function queryByUID(collectionRef: any, uid: string) {
	if (!uid) throw new Error('Missing UID');
	return query(collectionRef, where('uid', '==', uid));
}

export function ensureSnapshotIsNotEmpty(snapshot: QuerySnapshot, errorMessage: string): void {
	if (snapshot.empty) {
		throw new Error(errorMessage);
	}
}

export function mapSnapshotToData<T>(snapshot: QuerySnapshot): T[] {
	return snapshot.docs.map((doc) => doc.data() as T);
}
