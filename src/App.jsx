import React from 'react';
import Button from "@material-ui/core/Button";
import { GifGrid, SearchBar } from './components';
import { getRandomGif, getTrendGif, getSearchGif } from "./utils/apiRequest";

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			offset: 0,
			searchValue: '',
			currentGif: getTrendGif,
			loadMore: false,
		};
	}

	componentDidMount = async () => {
		const { currentGif } = this.state;
		const data = await currentGif();
		this.setState({
			data: data.data,
			offset: data.pagination.count,
		});
		window.addEventListener('scroll', this.handleScroll, true);
	};

	handleOnSearch = async (value) => {
		const dataSearch = await getSearchGif(value);
		// console.log(dataSearch);
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
		// console.log(dataRandom);
		this.setState({
			data: [dataRandom.data],
			currentGif: getRandomGif,
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
			newData = this.state.data.concat(dataRandom.data);
		}
		this.setState({ data: newData, offset: newOffset, loadMore: false });
	};

	handleScroll = async () => {
		const { scrollY, innerHeight } = window;
		const { offsetHeight } = document.documentElement;
		const { loadMore } = this.state;
		if (loadMore === false && (scrollY + innerHeight) > offsetHeight * 0.98) {
			this.setState({ loadMore: true}, this.handleMore);
		}
	};

	render() {
		return (
			<div>
				<SearchBar
					onSearch={this.handleOnSearch}
					onRandom={this.handleOnRandom}
					onTrends={this.handleOnTrends}
				/>
				<GifGrid
					arrayData={this.state.data}
					placeholder="Нет данных для отображения..."
				/>
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
