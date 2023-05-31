import { Dimensions, PixelRatio } from 'react-native';
import { scaleHeight, scaleWidth, scaleFont, scaleSize } from './Scale';

describe('Scaling functions', () => {
	const mockScreenWidth = 375;
	const mockScreenHeight = 667;
	const mockPixelRatio = 2;

	beforeAll(() => {
		Dimensions.get = jest.fn().mockReturnValue({
			width: mockScreenWidth,
			height: mockScreenHeight,
		});
		PixelRatio.roundToNearestPixel = jest.fn().mockImplementation((value) => {
			// Mock the pixel rounding logic
			return Math.round(value / mockPixelRatio);
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('scaleWidth should calculate the scaled width correctly', () => {
		const width = 100;
		const expectedScaledWidth = Math.round(
			(width * (mockScreenWidth / 375)) / mockPixelRatio
		);

		const scaledWidth = scaleWidth(width);

		expect(scaledWidth).toBe(expectedScaledWidth);
		expect(PixelRatio.roundToNearestPixel).toHaveBeenCalledWith(
			expectedScaledWidth * mockPixelRatio
		);
	});

	test('scaleHeight should calculate the scaled height correctly', () => {
		const height = 200;
		const expectedScaledHeight = Math.round(
			(height * (mockScreenHeight / 667)) / mockPixelRatio
		);

		const scaledHeight = scaleHeight(height);

		expect(scaledHeight).toBe(expectedScaledHeight);
		expect(PixelRatio.roundToNearestPixel).toHaveBeenCalledWith(
			expectedScaledHeight * mockPixelRatio
		);
	});

	test('scaleFont should calculate the scaled font size correctly', () => {
		const fontSize = 16;
		const expectedScaledFontSize = Math.round(
			(fontSize * (mockScreenWidth / 375)) / mockPixelRatio
		);

		const scaledFontSize = scaleFont(fontSize);

		expect(scaledFontSize).toBe(expectedScaledFontSize);
		expect(PixelRatio.roundToNearestPixel).toHaveBeenCalledWith(
			expectedScaledFontSize * mockPixelRatio
		);
	});

	test('scaleSize should calculate the scaled size correctly', () => {
		const size = 50;
		const expectedScaledSize = Math.round(
			(size * (mockScreenWidth / 375)) / mockPixelRatio
		);

		const scaledSize = scaleSize(size);

		expect(scaledSize).toBe(expectedScaledSize);
		expect(PixelRatio.roundToNearestPixel).toHaveBeenCalledWith(
			expectedScaledSize * mockPixelRatio
		);
	});
});
