/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { GifGrid, GifItem, SearchBar } from './components';

const API_KEY = 'aCYx8eJP8FQAqLZHjjxu1PPyFz0kNMqO';
const API_GIF_ID = '3o7WIydEMfY4J8q8Ew';

const API_URL = 'http://api.giphy.com/v1/gifs/random';
const API_URL_GIF = 'http://api.giphy.com/v1/gifs';
const API_TREND = 'http://api.giphy.com/v1/gifs/trending';

const API_REQUEST = `${API_URL}?api_key=${API_KEY}&id=${API_GIF_ID}`;
const API_REQUEST_GIF_ID = `${API_URL_GIF}/${API_GIF_ID}?api_key=${API_KEY}`;
const API_REQUEST_TRENDS_GIF = `${API_TREND}?api_key=${API_KEY}`;

const getRandomGif	= () => fetch(API_REQUEST).then(res => res.json());
const getIdGif		= () => fetch(API_REQUEST_GIF_ID).then(res => res.json());
const getTrendGif	= () => fetch(API_REQUEST_TRENDS_GIF).then(res => res.json());

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			trends: [],
		};
	}

	async componentDidMount() {
		const dataRandomGif = await getRandomGif();
		const dataTrendsGif = await getTrendGif();
		// console.log(dataRandomGif);
		// console.log(dataTrendsGif);
		this.setState({ data: dataRandomGif.data, trends: dataTrendsGif.data });
	}

	handleOnSearch(value) {
		console.log(value);
	}

	render() {
		return (
			<div>
				<SearchBar onSearch={this.handleOnSearch}/>
				<GifGrid arrayData={this.state.trends}/>
			</div>
		);
	}
}

export default App;
