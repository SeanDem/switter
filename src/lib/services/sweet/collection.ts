import { db } from "$lib/services/firebase";
import { collection } from "firebase/firestore";

export const sweetsCollection = collection(db, 'sweets');
