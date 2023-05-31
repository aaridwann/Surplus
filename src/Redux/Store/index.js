import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthFeature from '../Features/Auth/AuthFeature';
import NotificationFeature from '../Features/Notification/NotificationFeature';
import RegisterSlice from '../Features/Users/Users';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
	key: 'users',
	version: 1,
	storage: AsyncStorage,
	blacklist: ['notification'],
};

const rootReducer = combineReducers({
	auth: AuthFeature,
	register: RegisterSlice,
	notification: NotificationFeature,
});

const persist = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
	reducer: persist,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const PersistStore = persistStore(Store);
export default Store;
