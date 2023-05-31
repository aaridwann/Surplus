import React from 'react';
import { render } from '@testing-library/react-native';
import BottomSheetComponent from './BottomSheetComponent';
import { Text } from 'react-native';

describe('BottomSheetComponent', () => {
	test('Snapshot', () => {
		const { getByText, toJSON } = render(
			<BottomSheetComponent show={true}>
				<Text>Content</Text>
			</BottomSheetComponent>
		);

		const contentElement = getByText('Content');

		expect(contentElement).toBeDefined();
		expect(toJSON()).toMatchSnapshot();
	});
});
