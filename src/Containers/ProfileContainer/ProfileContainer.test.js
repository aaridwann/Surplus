import React from 'react';
import ProfileContainer from './ProfileContainer';
import { render } from '@testing-library/react-native';

jest.mock('react-redux', () => ({
	useSelector: jest.fn().mockReturnValue({ auth: { username: '' } }),
}));

describe('Profile Container', () => {
	it('Snapshot', () => {
		expect(render(<ProfileContainer />)).toMatchSnapshot();
	});
});
