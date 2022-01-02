import React, { useContext } from 'react';

import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import { SafeArea } from '../../../components/utils/safe-area.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsItem = styled(List.Item)`
	padding: ${props => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
	align-items: center;
	margin: ${props => props.theme.space[3]} 0 ${props => props.theme.space[3]}
		0;
`;

export const SettingScreen = ({ navigation }) => {
	const { onLogout, user } = useContext(AuthenticationContext);
	return (
		<SafeArea>
			<AvatarContainer>
				<Avatar.Icon size={150} icon="face" backgroundColor="tomato" />
				<Spacer position="top" size="large">
					<Text variant="label">{user.email}</Text>
				</Spacer>
			</AvatarContainer>

			<List.Section>
				<SettingsItem
					title="Favourites"
					description="View your favourites"
					left={props => (
						<List.Icon {...props} color="black" icon="heart" />
					)}
					onPress={() => navigation.navigate('Favourites')}
				/>
				<SettingsItem
					title="Logout"
					left={props => (
						<List.Icon {...props} color="black" icon="logout" />
					)}
					onPress={onLogout}
				/>
			</List.Section>
		</SafeArea>
	);
};
