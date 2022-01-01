import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { Search } from '../components/search.component';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;

const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

export function RestaurantsScreen({ navigation }) {
	const { restaurants, isLoading, error } = useContext(RestaurantsContext);
	const { favourites } = useContext(FavouritesContext);
	const [isToggled, setIsToggled] = useState(false);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading
						size={50}
						animating={true}
						color={Colors.deepOrange600}
					/>
				</LoadingContainer>
			)}
			<Search
				isFavouritesToggled={isToggled}
				onFavouritesToggle={() => setIsToggled(prev => !prev)}
			/>
			{isToggled && (
				<FavouritesBar
					favourites={favourites}
					onNavigate={navigation.navigate}
				/>
			)}
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<Spacer position="bottom" size="large">
							<RestaurantInfoCard
								restaurant={item}
								onPress={() =>
									navigation.navigate(
										'RestaurantDetailScreen',
										{
											restaurant: item,
										}
									)
								}
							/>
						</Spacer>
					);
				}}
				keyExtractor={item => item.name}
			/>
		</SafeArea>
	);
}
