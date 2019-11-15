import React, { useState } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

function SearchBar({ onSearch, onTrends, onRandom }) {
	const [search, setSearch] = useState('');

	return (
		<div className="container-search-bar">
			<Input
				onChange={e => setSearch(e.target.value)}
				value={search}
				placeholder="Cats..."
				variant="outlined"
			/>
			{/*<input*/}
			{/*	type="text"*/}
			{/*	onChange={e => setSearch(e.target.value)}*/}
			{/*	value={search}*/}
			{/*	placeholder="Cats..."*/}
			{/*/>*/}
			{/*<input type="submit" onClick={() => onSearch(search)} value="Поиск GIF"/>*/}
			{/*<input type="button" onClick={onTrends} value="Трендовые GIF" />*/}
			{/*<input type="button" onClick={onRandom} value="Рандомная GIF" />*/}
			<Button variant="contained" color="primary" onClick={() => onSearch(search)}>Поиск GIF</Button>
			<Button variant="contained" color="primary" onClick={onTrends}>Трендовые GIF</Button>
			<Button variant="contained" color="primary" onClick={onRandom}>Рандомная GIF</Button>
		</div>
	);
}

export default SearchBar;
