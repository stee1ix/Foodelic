import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
	padding: ${props => props.theme.space[3]};
	position: absolute;
	top: 25px;
	z-index: 999;
	width: 100%;
`;

export const Search = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	useEffect(() => {
		setSearchKeyword(keyword);
	}, [keyword]);

	return (
		<SearchContainer>
			<Searchbar
				placeholder="Search location"
				icon="map"
				value={searchKeyword}
				onChangeText={value => setSearchKeyword(value)}
				onSubmitEditing={() => search(searchKeyword)}
			/>
		</SearchContainer>
	);
};
