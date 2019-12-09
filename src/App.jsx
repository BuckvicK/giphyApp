import React from 'react';
import { GifGrid, SearchBar, LoadMore } from './components';
import { getRandomGif, getTrendGif, getSearchGif } from "./utils/apiRequest";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			offset: 0,
			searchValue: '',
			currentGif: 'trends',
			currentFunc: getTrendGif,
			loadMore: false,
		};
	}

	componentDidMount = async () => {
		const { currentFunc } = this.state;
		const data = await currentFunc();
		this.setState({
			data: data.data,
			offset: data.pagination.count,
		});
		window.addEventListener('scroll', this.handleScroll, true);
	};

	handleOnSearch = async (value) => {
		const dataSearch = await getSearchGif(value);
		this.setState({
			data: dataSearch.data,
			offset: dataSearch.pagination.count,
			searchValue: value,
			currentFunc: getSearchGif,
			currentGif: 'search',
		});
	};

	handleOnTrends = async () => {
		const dataTrends = await getTrendGif();
		this.setState({
			data: dataTrends.data,
			offset: dataTrends.pagination.count,
			currentFunc: getTrendGif,
			currentGif: 'trends',
		});
	};

	handleOnRandom = async () => {
		const dataRandom = await getRandomGif();
		this.setState({
			data: [dataRandom.data],
			currentFunc: getRandomGif,
			currentGif: 'random',
		});
	};

	handleMore = async () => {
		const { offset, currentFunc, searchValue } = this.state;
		let newData = [];
		let newOffset = offset;
		if (currentFunc === getSearchGif) {
			const dataSearch = await getSearchGif(searchValue, offset);
			newOffset = offset + dataSearch.pagination.count;
			newData = this.state.data.concat(dataSearch.data);
		} else if (currentFunc === getTrendGif) {
			const dataTrends = await getTrendGif(offset);
			newOffset = offset + dataTrends.pagination.count;
			newData = this.state.data.concat(dataTrends.data);
		} else if (currentFunc === getRandomGif) {
			const dataRandom = await getRandomGif();
			newData = this.state.data.concat(dataRandom.data);
		}
		this.setState({ data: newData, offset: newOffset, loadMore: false });
	};

	handleScroll = async () => {
		const { scrollY, innerHeight } = window;
		const { offsetHeight } = document.documentElement;
		const { loadMore } = this.state;
		if (loadMore === false && (scrollY + innerHeight) > offsetHeight * 0.90) {
			this.setState({ loadMore: true}, this.handleMore);
		}
	};

	render() {
		const { currentGif, data } = this.state;

		return (
			<div>
				<SearchBar
					onSearch={this.handleOnSearch}
					onRandom={this.handleOnRandom}
					onTrends={this.handleOnTrends}
					active={currentGif}
				/>
				<GifGrid
					arrayData={data}
					placeholder="Нет данных для отображения..."
				/>
				<LoadMore handleMore={this.handleMore} />
			</div>
		);
	}
}

export default App;
