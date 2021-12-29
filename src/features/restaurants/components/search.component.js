import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
	padding: ${props => props.theme.space[3]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	return (
		<SearchContainer>
			<Searchbar
				icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
				onIconPress={onFavouritesToggle}
				placeholder="Search location"
				value={searchKeyword}
				onChangeText={value => setSearchKeyword(value)}
				onSubmitEditing={() => search(searchKeyword)}
			/>
		</SearchContainer>
	);
};
