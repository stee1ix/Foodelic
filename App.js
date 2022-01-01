import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Provider as PaperProvider } from 'react-native-paper';

import {
	useFonts as useOswald,
	Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import { Navigation } from './src/infrastructure/navigation';

import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBPgsQFVjF1RXhAfn-pGi2wNnAubKABwV0',
	authDomain: 'foodelic-da72c.firebaseapp.com',
	projectId: 'foodelic-da72c',
	storageBucket: 'foodelic-da72c.appspot.com',
	messagingSenderId: '371341229479',
	appId: '1:371341229479:web:5b6f7d333a73ee1bff8a82',
};

if (!getApps.length) {
	initializeApp(firebaseConfig);
}

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<PaperProvider>
					<AuthenticationContextProvider>
						<FavouritesContextProvider>
							<LocationContextProvider>
								<RestaurantsContextProvider>
									<Navigation />
								</RestaurantsContextProvider>
							</LocationContextProvider>
						</FavouritesContextProvider>
					</AuthenticationContextProvider>
				</PaperProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
