import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

import { SafeArea } from '../../components/utils/safe-area.component';

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'restaurant',
	Settings: 'settings',
	Map: 'map',
};

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

export const AppNavigator = () => {
	return (
		<Tab.Navigator screenOptions={createScreenOptions}>
			<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
			<Tab.Screen name="Map" component={MapScreen} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	);
};
