import { Dimensions, PixelRatio } from 'react-native';

// Fungsi untuk mengukur skala lebar berdasarkan dimensi perangkat
const scaleWidth = (width) => {
	const screenWidth = Dimensions.get('window').width;
	const scale = screenWidth / 375; // 375 adalah lebar referensi

	return PixelRatio.roundToNearestPixel(width * scale);
};

// Fungsi untuk mengukur skala tinggi berdasarkan dimensi perangkat
const scaleHeight = (height) => {
	const screenHeight = Dimensions.get('window').height;
	const scale = screenHeight / 667; // 667 adalah tinggi referensi

	return PixelRatio.roundToNearestPixel(height * scale);
};

const scaleFont = (fontSize) => {
	const screenWidth = Dimensions.get('window').width;
	const scale = screenWidth / 375; // 375 adalah lebar referensi

	const newSize = fontSize * scale;
	return PixelRatio.roundToNearestPixel(newSize);
};

const scaleSize = (size) => {
	const screenWidth = Dimensions.get('window').width;
	const scale = screenWidth / 375; // 375 adalah lebar referensi

	return PixelRatio.roundToNearestPixel(size * scale);
};

export { scaleHeight, scaleWidth, scaleFont, scaleSize };
