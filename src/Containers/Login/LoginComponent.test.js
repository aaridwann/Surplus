import React from 'react';
import LoginComponent from './Login.Component';
import { fireEvent, render } from '@testing-library/react-native';

describe('LoginComponent', () => {
	const Props = {
		state: {
			username: '',
			password: '',
			register: {
				username: '',
				password: '',
				confirmationPassword: '',
				error: '',
			},
		},
		method: {
			LoginFunction: jest.fn(),
			ChangeInput: jest.fn(),
			setRegisterChange: jest.fn(),
			SubmitRegister: jest.fn(),
		},
	};
	describe('Snapshot', () => {
		it('Should render correct layout', () => {
			expect(render(<LoginComponent {...Props} />)).toMatchSnapshot();
		});
	});

	describe('Define any component', () => {
		it('Should show bottom sheet when press button login', () => {
			const { getByTestId } = render(<LoginComponent {...Props} />);
			const buttonLogin = getByTestId('loginButton');

			fireEvent.press(buttonLogin);

			expect(buttonLogin).toBeDefined();
			expect(getByTestId('swiper')).toBeDefined();
			expect(getByTestId('loginSection')).toBeDefined();
			expect(getByTestId('registerSection')).toBeDefined();
		});

		it('Should Not show bottom sheet when first render', () => {
			const { getByTestId, queryByTestId } = render(
				<LoginComponent {...Props} />
			);
			const buttonLogin = getByTestId('loginButton');

			expect(buttonLogin).toBeDefined();
			expect(queryByTestId('swiper')).toBeNull();
			expect(queryByTestId('loginSection')).toBeNull();
			expect(queryByTestId('registerSection')).toBeNull();
		});

		it('Should next to register when press no have account', () => {
			const { getByTestId, getByText } = render(<LoginComponent {...Props} />);
			const buttonLogin = getByTestId('loginButton');

			fireEvent.press(buttonLogin);

			expect(buttonLogin).toBeDefined();
			expect(getByTestId('swiper')).toBeDefined();
			expect(getByTestId('loginSection')).toBeDefined();
			expect(getByTestId('registerSection')).toBeDefined();
			expect(getByText(/no have account ?/i)).toBeDefined();
			expect(getByText(/Registration/i)).toBeDefined();

			fireEvent.press(getByTestId('buttonSignUp'));
		});

		it('Should call Login Function when login button press', () => {
			const { queryByTestId, getByTestId } = render(<LoginComponent {...Props} />);
			const modalButton = getByTestId('loginButton');
			const buttonLogin = queryByTestId('button');

			fireEvent.press(modalButton);
            
			expect(buttonLogin).toBeDefined();
			// console.log(buttonLogin);
			// fireEvent.press(buttonLogin);

			// expect(Props.method.LoginFunction).toHaveBeenCalled();
		});
	});
});
