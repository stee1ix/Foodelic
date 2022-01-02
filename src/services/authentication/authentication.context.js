import React, { createContext, useState } from 'react';

import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { getApp } from 'firebase/app';

import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null);

	onAuthStateChanged(getAuth(getApp()), usr => {
		if (usr) {
			setUser(usr);
			setIsLoading(false);
		} else {
			setIsLoading(false);
		}
	});

	const onLogin = (email, password) => {
		setIsLoading(true);
		loginRequest(email, password)
			.then(u => {
				setUser(u);
				setIsLoading(false);
			})
			.catch(err => {
				setIsLoading(false);
				setError(err.toString());
			});
	};

	const onRegister = (email, password, repeatedPassword) => {
		setIsLoading(true);
		if (password !== repeatedPassword) {
			setError('Error: Passwords do not match');
		} else {
			const auth = getAuth(getApp());
			createUserWithEmailAndPassword(auth, email, password)
				.then(u => {
					setUser(u);
					setIsLoading(false);
				})
				.catch(err => {
					setIsLoading(false);
					setError(err.toString());
				});
		}
	};

	const onLogout = () => {
		signOut(getAuth(getApp())).then(() => {
			setUser(null);
			setError(null);
		});
	};

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated: !!user,
				user,
				isLoading,
				error,
				onLogin,
				onRegister,
				onLogout,
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
};
