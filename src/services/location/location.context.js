import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTranform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [keyword, setKeyword] = useState('san francisco');

	const onSearch = (searchKeyword = 'antwerp') => {
		setIsLoading(true);
		setKeyword(searchKeyword);
		locationRequest(searchKeyword.toLowerCase())
			.then(locationTranform)
			.then(result => {
				setIsLoading(false);
				setLocation(result);
				console.log(result);
			})
			.catch(err => {
				setIsLoading(false);
				setError(err);
			});
	};

	return (
		<LocationContext.Provider
			value={{ isLoading, error, search: () => null, location, keyword }}>
			{children}
		</LocationContext.Provider>
	);
};
