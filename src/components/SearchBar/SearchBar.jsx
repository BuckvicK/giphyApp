import React, { useState } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import './SearchBar.css';

function SearchBar({ onSearch, onTrends, onRandom }) {
	const [search, setSearch] = useState('');

	return (
		<div className="container-search-bar">
			<div className={"container-search-bar__search-input"}>
				<Input
					onChange={e => setSearch(e.target.value)}
					value={search}
					placeholder="Cats..."
					variant="outlined"
				/>
			</div>
			<div className={"container-search-bar__search-button"}>
				<Button variant="contained" color="primary" onClick={() => onSearch(search)}>Поиск GIF</Button>
			</div>
			<div className={"container-search-bar__trends-button"}>
				<Button variant="contained" color="primary" onClick={onTrends}>Трендовые GIF</Button>
			</div>
			<div className={"container-search-bar__random-button"}>
				<Button variant="contained" color="primary" onClick={onRandom}>Рандомная GIF</Button>
			</div>
		</div>
	);
}

export default SearchBar;
