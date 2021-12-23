import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
	useFonts as useOswald,
	Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { SafeArea } from './src/components/utils/safe-area.component';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'restaurant',
	Settings: 'settings',
	Map: 'map',
};

const Map = () => (
	<SafeArea>
		<Text>Map</Text>
	</SafeArea>
);
const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
);

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];

	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray',
		headerShown: false,
		tabBarShowLabel: false,
	};
};

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
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<NavigationContainer>
								<Tab.Navigator
									screenOptions={createScreenOptions}>
									<Tab.Screen
										name="Restaurants"
										component={RestaurantsScreen}
									/>
									<Tab.Screen name="Map" component={Map} />
									<Tab.Screen
										name="Settings"
										component={Settings}
									/>
								</Tab.Navigator>
							</NavigationContainer>
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</PaperProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
