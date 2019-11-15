/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { GifGrid, SearchBar } from './components';

const API_KEY = 'aCYx8eJP8FQAqLZHjjxu1PPyFz0kNMqO';
const API_GIF_ID = '3o7WIydEMfY4J8q8Ew';

const API_URL = 'http://api.giphy.com/v1/gifs/random';
const API_URL_GIF = 'http://api.giphy.com/v1/gifs';
const API_TREND = 'http://api.giphy.com/v1/gifs/trending';
const API_SEARCH = 'http://api.giphy.com/v1/gifs/search';

const API_REQUEST = `${API_URL}?api_key=${API_KEY}&`;
const API_REQUEST_GIF_ID = `${API_URL_GIF}/${API_GIF_ID}?api_key=${API_KEY}`;
const API_REQUEST_TRENDS_GIF = `${API_TREND}?api_key=${API_KEY}`;
const API_REQUEST_SEARCH_GIF = (q) => `${API_SEARCH}?api_key=${API_KEY}&q=${q}`;

const getRandomGif	= () => fetch(API_REQUEST).then(res => res.json());
const getIdGif		= () => fetch(API_REQUEST_GIF_ID).then(res => res.json());
const getTrendGif	= () => fetch(API_REQUEST_TRENDS_GIF).then(res => res.json());
const getSearchGif	= (query) => fetch(API_REQUEST_SEARCH_GIF(query)).then(res => res.json());

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	async componentDidMount() {
		const dataTrendsGif = await getTrendGif();
		this.setState({ data: dataTrendsGif.data });
	}

	/**
	 * Поиск данных по ключевому слову
	 * @param value - Ключевая фраза для поиска
	 * @returns {Promise<void>}
	 */
	handleOnSearch = async (value) => {
		const dataSearchGif = await getSearchGif(value);
		this.setState({ data: dataSearchGif.data });
	};

	handleOnRandom = async () => {
		const dataRandomGif = await getRandomGif();
		console.log('RANDOM_GIF', dataRandomGif);
		this.setState({ data: [dataRandomGif.data] });
	};

	handleOnTrends = async () => {
		const dataTrendsGif = await getTrendGif();
		// console.log('TRENDS', dataTrendsGif);
		this.setState({ data: dataTrendsGif.data });
	};

	render() {
		return (
			<div>
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
