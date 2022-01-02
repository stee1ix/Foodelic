import React, { useEffect } from 'react';

import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';

import { SettingScreen } from '../../features/settings/screens/settings.screen';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';

const Stack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyleInterpolator:
					CardStyleInterpolators.forBottomSheetAndroid,
			}}>
			<Stack.Screen name="SettingsScreen" component={SettingScreen} />
			<Stack.Screen
				options={{ headerShown: true }}
				name="Favourites"
				component={FavouritesScreen}
			/>
		</Stack.Navigator>
	);
};
