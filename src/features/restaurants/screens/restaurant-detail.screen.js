import React, { useState } from 'react';

import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { SafeArea } from '../../../components/utils/safe-area.component';

import RestaurantInfoCard from '../components/restaurant-info-card.component';

export const RestaurantDetailScreen = ({ route }) => {
	const [breakfastExpanded, setBreakfastExpanded] = useState(false);
	const [lunchExpanded, setLunchExpanded] = useState(false);
	const [dinnerExpanded, setDinnerExpanded] = useState(false);
	const [drinksExpanded, setDrinksExpanded] = useState(false);

	const { restaurant } = route.params;

	return (
		<SafeArea>
			<RestaurantInfoCard restaurant={restaurant} />
			<ScrollView>
				<List.Accordion
					title="Breakfast"
					left={props => <List.Icon {...props} icon="bread-slice" />}
					expanded={breakfastExpanded}
					onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
					<List.Item title="Dosa" />
					<List.Item title="Maggi" />
					<List.Item title="Cereals" />
				</List.Accordion>
				<List.Accordion
					title="Lunch"
					left={props => <List.Icon {...props} icon="hamburger" />}
					expanded={lunchExpanded}
					onPress={() => setLunchExpanded(!lunchExpanded)}>
					<List.Item title="Rice Dal" />
					<List.Item title="Chicken Rice" />
				</List.Accordion>
				<List.Accordion
					title="Dinner"
					left={props => <List.Icon {...props} icon="food-variant" />}
					expanded={dinnerExpanded}
					onPress={() => setDinnerExpanded(!dinnerExpanded)}>
					<List.Item title="Burger w/ Fries" />
					<List.Item title="Cheese Pizza" />
					<List.Item title="Butter Chicken" />
				</List.Accordion>
				<List.Accordion
					title="Drinks"
					left={props => <List.Icon {...props} icon="cup" />}
					expanded={drinksExpanded}
					onPress={() => setDrinksExpanded(!drinksExpanded)}>
					<List.Item title="Fanta" />
					<List.Item title="Coffee" />
					<List.Item title="Coke" />
					<List.Item title="Tea" />
				</List.Accordion>
			</ScrollView>
		</SafeArea>
	);
};
