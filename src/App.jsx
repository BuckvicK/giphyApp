/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { GifGrid, SearchBar } from './components';
import { buildQueryParams } from './utils';
import Button from "@material-ui/core/Button";

const API_KEY = 'aCYx8eJP8FQAqLZHjjxu1PPyFz0kNMqO';
const API_GIF_ID = '3o7WIydEMfY4J8q8Ew';
const LIMIT_GIF = 10;

const API_SEARCH = 'https://api.giphy.com/v1/gifs/search';
const API_REQUEST_SEARCH_GIF = `${API_SEARCH}?api_key=${API_KEY}&`;
const getSearchGif	= (query, offset = 0, limit = LIMIT_GIF) =>
	fetch(`${API_REQUEST_SEARCH_GIF}${buildQueryParams(
		{
			q: query,
			offset,
			limit,
		}
	)}`).then(res => res.json());

const API_TREND = 'https://api.giphy.com/v1/gifs/trending';
const API_REQUEST_TRENDS_GIF = `${API_TREND}?api_key=${API_KEY}&`;
const getTrendGif	= (offset = 0, limit = LIMIT_GIF) =>
	fetch(`${API_REQUEST_TRENDS_GIF}${buildQueryParams(
		{
			offset,
			limit,
		}
	)}`).then(res => res.json());


const API_URL = 'https://api.giphy.com/v1/gifs/random';
const API_URL_GIF = 'https://api.giphy.com/v1/gifs';

const API_REQUEST = `${API_URL}?api_key=${API_KEY}&`;
const API_REQUEST_ID_GIF = `${API_URL_GIF}/${API_GIF_ID}?api_key=${API_KEY}&`;

const getRandomGif	= () => fetch(API_REQUEST).then(res => res.json());
const getIdGif		= () => fetch(API_REQUEST_ID_GIF).then(res => res.json());


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			offset: 0,
			searchValue: '',
			currentGif: getTrendGif,
		};
	}

	componentDidMount = async () => {
		const { currentGif } = this.state;
		const data = await currentGif();
		this.setState({
			data: data.data,
			offset: data.pagination.count,
		});
		// window.addEventListener('scroll', this.handleScroll, true);
	};

	handleOnSearch = async (value) => {
		const dataSearch = await getSearchGif(value);
		console.log(dataSearch);
		this.setState({
			data: dataSearch.data,
			offset: dataSearch.pagination.count,
			searchValue: value,
			currentGif: getSearchGif,
		});
	};

	handleOnTrends = async () => {
		const dataTrends = await getTrendGif();
		this.setState({
			data: dataTrends.data,
			offset: dataTrends.pagination.count,
			currentGif: getTrendGif,
		});
	};

	handleOnRandom = async () => {
		const dataRandom = await getRandomGif();
		console.log(dataRandom);
		this.setState({
			data: [dataRandom.data]
		});
	};

	handleMore = async () => {
		const { offset, currentGif, searchValue } = this.state;
		let newData = [];
		let newOffset = offset;
		if (currentGif === getSearchGif) {
			const dataSearch = await getSearchGif(searchValue, offset);
			newOffset = offset + dataSearch.pagination.count;
			newData = this.state.data.concat(dataSearch.data);
		} else if (currentGif === getTrendGif) {
			const dataTrends = await getTrendGif(offset);
			newOffset = offset + dataTrends.pagination.count;
			newData = this.state.data.concat(dataTrends.data);
		} else if (currentGif === getRandomGif) {
			const dataRandom = await getRandomGif();
			newOffset = offset + dataRandom.pagination.count;
			newData = this.state.data.concat(dataRandom.data);
		}
		this.setState({ data: newData, offset: newOffset });
	};

	handleScroll = async (event) => {
		const { scrollY, innerHeight } = window;
		const { offsetHeight } = document.documentElement;
		if ((scrollY + innerHeight) > offsetHeight * 0.98) {
			await this.handleMore();
		}
	};

	render() {
		return (
			<div onScroll={() => console.log('scroll')} onScrollCapture={console.log}>
				<SearchBar
					onSearch={this.handleOnSearch}
					onRandom={this.handleOnRandom}
					onTrends={this.handleOnTrends}
				/>
				<GifGrid arrayData={this.state.data}/>
				<div className="container-button-more">
					<Button
						style={{ width: '100%', height: '70px' }}
						variant="contained"
						color="primary"
						onClick={this.handleMore}
					>
						Загрузить ещё...
					</Button>
				</div>
			</div>
		);
	}
}

export default App;
