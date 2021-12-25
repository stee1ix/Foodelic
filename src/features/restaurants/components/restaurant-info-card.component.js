import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

import {
	Address,
	Info,
	Open,
	Rating,
	RestaurantCard,
	RestaurantCardCover,
	Section,
	SectionEnd,
	Icon,
} from './restaurant-info-card.styles';

export default function RestaurantInfoCard({ restaurant = {} }) {
	const {
		name = 'Khalsa Hotel',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg',
		],
		address = 'Golmuri, Jamshedpur',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
		placeId,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Text variant="label">{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map((_, index) => (
							<SvgXml
								key={`star-${placeId}-${index}`}
								xml={star}
								width={20}
								height={20}
							/>
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="error">CLOSED TEMPORARILY</Text>
						)}
						<Spacer position="left" size="large">
							{isOpenNow && (
								<Open xml={open} width={20} height={20} />
							)}
						</Spacer>
						<Spacer position="left" size="large">
							<Icon
								source={{ uri: icon }}
								style={{ width: 15, height: 15 }}
							/>
						</Spacer>
					</SectionEnd>
				</Section>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
}
