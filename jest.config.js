module.exports = {
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'node_modules/(?!(react-native|@react-native|@testing-library))',
	],
	preset: 'react-native',
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
	moduleNameMapper: {
		'^@expo/vector-icons$': '<rootDir>/src/__mocks__/@expo/vector-icons.js',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'identity-obj-proxy',
		'^@expo/vector-icons/AntDesign$': '<rootDir>/src/__mocks__/AntDesign.js',
		'^expo-linear-gradient$': '<rootDir>/src/__mocks__/expo-linear-gradient.js',
		'^axios$': '<rootDir>/src/__mocks__/axios.js',
	},
};
