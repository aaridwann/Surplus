import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from '../Redux/Store';
import AuthWrapper from '../Containers/AuthWrapper/AuthWrapper';
import { RootContainer } from '../Containers/RootContainer';
import { PersistStore } from '../Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

function Navigation() {
	return (
		<Provider store={Store}>
			<PersistGate loading={null} persistor={PersistStore}>
				<NavigationContainer>
					<RootContainer>
						<AuthWrapper />
					</RootContainer>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}

export default Navigation;
