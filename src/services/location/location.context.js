import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTranform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [keyword, setKeyword] = useState('San Francisco');

	const onSearch = searchKeyword => {
		setIsLoading(true);
		setKeyword(searchKeyword);
		if (!searchKeyword.length) {
			//don't do anything
			return;
		}
		locationRequest(searchKeyword.toLowerCase())
			.then(locationTranform)
			.then(result => {
				setIsLoading(false);
				setLocation(result);
			})
			.catch(err => {
				setIsLoading(false);
				setError(err);
			});
	};

	return (
		<LocationContext.Provider
			value={{ isLoading, error, search: onSearch, location, keyword }}>
			{children}
		</LocationContext.Provider>
	);
};
