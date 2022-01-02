import React, { useContext, useState } from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	AuthInput,
} from '../components/account.styles';

export const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { error, onLogin } = useContext(AuthenticationContext);

	return (
		<AccountBackground>
			<AccountCover />
			<AccountContainer>
				<AuthInput
					label="Email"
					value={email}
					textContentType="emailAddress"
					keyboardType="email-address"
					autoCapitalize="none"
					onChangeText={u => setEmail(u)}
				/>
				<Spacer size="large" position="top">
					<AuthInput
						label="Password"
						value={password}
						textContentType="password"
						secureTextEntry
						autoCapitalize="none"
						secure
						onChangeText={p => setPassword(p)}
					/>
				</Spacer>
				{error && (
					<Spacer position="top" size="large">
						<Text variant="error">{error}</Text>
					</Spacer>
				)}
				<Spacer size="large" position="top">
					<AuthButton
						icon="lock-open"
						mode="contained"
						onPress={() => onLogin(email, password)}>
						Login
					</AuthButton>
				</Spacer>
			</AccountContainer>
		</AccountBackground>
	);
};
