import React from 'react';

import LottieView from 'lottie-react-native';

import { Spacer } from '../../../components/spacer/spacer.component';

import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	Title,
	ButtonsWrapper,
	AnimationWrapper,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			<AccountCover />
			<AnimationWrapper>
				<LottieView
					key="animation"
					autoPlay
					loop
					resizeMode="cover"
					source={require('../../../../assets/burger.json')}
				/>
			</AnimationWrapper>
			<ButtonsWrapper>
				<Title>Foodelic</Title>
				<Spacer size="large">
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
				</Spacer>
			</ButtonsWrapper>
		</AccountBackground>
	);
};
