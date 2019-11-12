import React from 'react';
import './App.css';
import { GifItem, SearchBar } from './components';

const API_URL = 'http://api.giphy.com/v1/gifs/random';
// const API_URL_GIF = 'http://api.giphy.com/v1/gifs';
const API_KEY = 'aCYx8eJP8FQAqLZHjjxu1PPyFz0kNMqO';
const API_GIF_ID = '3o7WIydEMfY4J8q8Ew';
const API_REQUEST = `${API_URL}?api_key=${API_KEY}&id=${API_GIF_ID}`;
// const API_REQUEST_GIF_ID = `${API_URL_GIF}/${API_GIF_ID}?api_key=${API_KEY}`;

const getRandomGif = () => fetch(API_REQUEST).then(res => res.json());

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}

	async componentDidMount() {
		const dataRandomGif = await getRandomGif();
		this.setState({ data: dataRandomGif.data });
	}

	render() {
		return (
			<div style={{ width: '300px' }}>
				<SearchBar onSearch={null}/>
				<GifItem gifObject={this.state.data}/>
			</div>
		);
	}
}

export default App;
