import React, { useContext } from 'react';

import styled from 'styled-components/native';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

import { FavouritesContext } from '../../../services/favourites/favourites.context';

import RestaurantInfoCard from '../../restaurants/components/restaurant-info-card.component';
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';

const NoFavouritesArea = styled(SafeArea)`
	align-items: center;
	justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
	const { favourites } = useContext(FavouritesContext);

	return favourites.length ? (
		<SafeArea>
			<RestaurantList
				data={favourites}
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
	) : (
		<NoFavouritesArea>
			<Text center>No Favourites Yet</Text>
		</NoFavouritesArea>
	);
};
