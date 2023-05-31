// module.exports = {
// 	transform: {
// 		'^.+\\.jsx?$': 'babel-jest',
// 	},
// 	transformIgnorePatterns: [
// 		'node_modules/(?!(react-native|@react-native|@testing-library))',
// 	],
// 	preset: 'react-native',
// 	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
// };
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
	},
};
