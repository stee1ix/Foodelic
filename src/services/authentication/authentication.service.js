import { getApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = (email, password) => {
	const auth = getAuth(getApp());
	return signInWithEmailAndPassword(auth, email, password);
};
