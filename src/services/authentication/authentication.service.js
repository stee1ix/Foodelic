import { getApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = async (email, password) => {
	const auth = getAuth(getApp());
	const userCredentials = await signInWithEmailAndPassword(
		auth,
		email,
		password
	);
	console.log(userCredentials);
};
