import React, { useContext, useState } from 'react';
import { ActivityIndicator, Colors, TextInput } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	AuthInput,
	ErrorContainer,
	Title,
} from '../components/account.styles';

export const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { error, onLogin, isLoading } = useContext(AuthenticationContext);

	return (
		<AccountBackground>
			<Title>Foodelic</Title>
			<AccountCover />
			<AccountContainer>
				<AuthInput
					mode="outlined"
					label="Email"
					value={email}
					left={<TextInput.Icon name="email" color="grey" />}
					textContentType="emailAddress"
					keyboardType="email-address"
					autoCapitalize="none"
					onChangeText={u => setEmail(u)}
				/>
				<Spacer size="large" position="top">
					<AuthInput
						mode="outlined"
						label="Password"
						value={password}
						left={<TextInput.Icon name="lock" color="grey" />}
						textContentType="password"
						secureTextEntry
						autoCapitalize="none"
						onChangeText={p => setPassword(p)}
					/>
				</Spacer>
				{error && (
					<ErrorContainer>
						<Text variant="error">{error}</Text>
					</ErrorContainer>
				)}
				<Spacer size="large" position="top">
					{!isLoading ? (
						<AuthButton
							icon="lock-open"
							mode="contained"
							onPress={() => onLogin(email, password)}>
							Login
						</AuthButton>
					) : (
						<ActivityIndicator
							animating={true}
							color={Colors.blue300}
						/>
					)}
				</Spacer>
			</AccountContainer>
		</AccountBackground>
	);
};
