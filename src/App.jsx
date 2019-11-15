/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { GifGrid, SearchBar } from './components';
import calculateParams from "./utils/calculateParams";

const API_KEY = 'aCYx8eJP8FQAqLZHjjxu1PPyFz0kNMqO';
const API_GIF_ID = '3o7WIydEMfY4J8q8Ew';

const API_URL = 'http://api.giphy.com/v1/gifs/random';
const API_URL_GIF = 'http://api.giphy.com/v1/gifs';
const API_TREND = 'http://api.giphy.com/v1/gifs/trending';
const API_SEARCH = 'http://api.giphy.com/v1/gifs/search';

const API_REQUEST = `${API_URL}?api_key=${API_KEY}&`;
const API_REQUEST_GIF_ID = `${API_URL_GIF}/${API_GIF_ID}?api_key=${API_KEY}&`;
const API_REQUEST_TRENDS_GIF = `${API_TREND}?api_key=${API_KEY}&`;
const API_REQUEST_SEARCH_GIF = (q) => `${API_SEARCH}?api_key=${API_KEY}&q=${q}&`;

const LIMIT_GIF = 10;

const getRandomGif	= () => fetch(API_REQUEST).then(res => res.json());
const getIdGif		= () => fetch(API_REQUEST_GIF_ID).then(res => res.json());
const getTrendGif	= (limit = LIMIT_GIF) => fetch(`${API_REQUEST_TRENDS_GIF}limit=${limit}`).then(res => res.json());
const getSearchGif	= (query, limit = LIMIT_GIF) =>
	fetch(`${API_REQUEST_SEARCH_GIF(query)}limit=${limit}`).then(res => res.json());

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount = async () => {
		// const dataTrendsGif = await getTrendGif();
		const dataTrendsGif = await getSearchGif('cats');
		// calculateParams(dataTrendsGif.data);
		this.setState({ data: dataTrendsGif.data });
	};

	handleOnSearch = async (value) => {
		const dataSearchGif = await getSearchGif(value);
		this.setState({ data: dataSearchGif.data });
	};

	handleOnRandom = async () => {
		const dataRandomGif = await getRandomGif();
		this.setState({ data: [dataRandomGif.data] });
	};

	handleOnTrends = async () => {
		const dataTrendsGif = await getTrendGif();
		this.setState({ data: dataTrendsGif.data });
	};

	render() {
		return (
			<div style={{ width: '900px', margin: '0 auto' }}>
				<SearchBar
					onSearch={this.handleOnSearch}
					onRandom={this.handleOnRandom}
					onTrends={this.handleOnTrends}
				/>
				<GifGrid arrayData={this.state.data}/>
			</div>
		);
	}
}

export default App;
