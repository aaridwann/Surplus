import React, { useEffect, useState } from 'react';
import HomeComponent from './HomeComponent';
import axios from 'axios';
import _, { get } from 'lodash';
import AppAxios from '../../Utils/Interceptor/AxiosInterceptor';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_AUTH } from '../../Redux/Features/Auth/AuthFeature';

const initialState = {
	loading: false,
	data: [],
	dataFeeds: [],
	dataFeedsBySearch: [],
	pageFeeds: 3,
	country: '',
	gender: '',
};
const URL = 'https://randomuser.me/api/';

function HomeContainer({ navigation }) {
	let [state, setState] = useState(initialState);
	const method = { LoadMore, Search, SelectFilter, GoToDetails, Logout };
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => state);

	const GetData = () => {
		AppAxios.get('https://randomuser.me/api/?results=10').then(({ data }) => {
			const users = get(data, 'results', []);
			setState((prev) => ({ ...prev, loading: false, data: users }));
		});
	};
	const GetDataFeeds = async () => {
		const page = get(state, 'pageFeeds', '3');
		const country = state.country ? `nat=${state.country}&` : '';
		const gender = state.gender ? `gender=${state.gender}&` : '';

		try {
			const response = await axios.get(
				`https://randomuser.me/api/?${country}${gender}page=${page}&results=30`
			);
			const data = get(response, 'data.results', []);
			setState((prev) => ({
				...prev,
				loading: false,
				dataFeeds: [...prev.dataFeeds, ...data],
			}));
		} catch (error) {
			console.log(error);
		}
	};
	const GetByFilter = async () => {
		const country = state.country ? `nat=${state.country}&` : '';
		const gender = state.gender ? `gender=${state.gender}&` : '';

		try {
			const response = await axios.get(URL + `?${country}${gender}results=10`);
			const data = get(response, 'data.results', []);
			setState((prev) => ({ ...prev, dataFeeds: data }));
		} catch (error) {
			console.log(error);
		}
	};
	function SelectFilter({ type, value }) {
		setState((prev) => ({ ...prev, [type]: value }));
	}
	function Logout() {
		dispatch(RESET_AUTH());
	}
	function LoadMore() {
		setState((prev) => ({ ...prev, pageFeeds: prev.pageFeeds + 1 }));
	}
	function Search(value) {
		const data = get(state, 'dataFeeds', []);
		const res = _.filter(data, (val) => {
			return val?.name?.first == value;
		});
		return res;
	}
	function GoToDetails(params) {
		navigation.navigate('Detail', params);
	}

	useEffect(() => {
		GetData();
	}, []);

	useEffect(() => {
		GetByFilter();
	}, [state.country, state.gender]);

	useEffect(() => {
		GetDataFeeds();
	}, [state.pageFeeds]);

	state = { ...state, ...auth };
	
	return <HomeComponent state={state} method={method} />;
}

export default HomeContainer;

HomeContainer.propTypes = {
	navigation: PropTypes.object,
};
