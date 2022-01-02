import React from 'react';

import { Spacer } from '../../../components/spacer/spacer.component';

import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	Title,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			<Title>Foodelic</Title>
			<AccountCover />
			<AccountContainer>
				<AuthButton
					mode="contained"
					icon="lock-open"
					onPress={() => navigation.navigate('Login')}>
					Login
				</AuthButton>
				<Spacer size="large">
					<AuthButton
						mode="contained"
						icon="email"
						onPress={() => navigation.navigate('Register')}>
						Register
					</AuthButton>
				</Spacer>
			</AccountContainer>
		</AccountBackground>
	);
};
