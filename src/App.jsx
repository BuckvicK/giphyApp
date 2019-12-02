import React from 'react';
import Button from "@material-ui/core/Button";
import { GifGrid, SearchBar } from './components';
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
		// console.log(dataSearch);
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
		// console.log(dataRandom);
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
					active={this.state.currentGif}
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
