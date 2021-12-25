import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
			<RestaurantStack.Screen
				name="RestaurantsScreen"
				component={RestaurantsScreen}
			/>
			<RestaurantStack.Screen
				name="RestaurantDetailScreen"
				component={RestaurantDetailScreen}
			/>
		</RestaurantStack.Navigator>
	);
};
