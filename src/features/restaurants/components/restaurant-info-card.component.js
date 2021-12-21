import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
	background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
	padding: ${props => props.theme.space[3]};
	background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
	font-size: ${props => props.theme.fontSizes.body};
	font-family: ${props => props.theme.fonts.heading};
	color: ${props => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
	font-size: ${props => props.theme.fontSizes.caption};
	font-family: ${props => props.theme.fonts.body};
	color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled.View`
	padding: ${props => props.theme.space[3]};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
	const {
		name = 'KFC',
		icon,
		photos = [
			'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg',
		],
		address = 'Bistupur, Jamshedpur',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = restaurant;

	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
}
