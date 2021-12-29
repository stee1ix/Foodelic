import React, { createContext, useState, useEffect } from 'react';

import * as SecureStore from 'expo-secure-store';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
	const [favourites, setFavourites] = useState([]);

	const saveFavourites = async value => {
		try {
			const jsonValue = JSON.stringify(value);
			await SecureStore.setItemAsync('favourites', jsonValue);
		} catch (err) {
			console.log('error storing', err);
		}
	};

	const loadFavourites = async () => {
		try {
			const value = await SecureStore.getItemAsync('favourites');
			console.log(value);
			if (value !== null) {
				setFavourites(JSON.parse(value));
			}
		} catch (err) {
			console.log('error loading', err);
		}
	};

	const add = restaurant => {
		setFavourites([...favourites, restaurant]);
	};

	const remove = restaurant => {
		const newFavourites = favourites.filter(
			x => x.placeId !== restaurant.placeId
		);
		setFavourites(newFavourites);
	};

	useEffect(() => {
		loadFavourites();
	}, []);

	useEffect(() => {
		saveFavourites(favourites);
	}, [favourites]);

	return (
		<FavouritesContext.Provider
			value={{
				favourites,
				addToFavourites: add,
				removeFromFavourites: remove,
			}}>
			{children}
		</FavouritesContext.Provider>
	);
};
