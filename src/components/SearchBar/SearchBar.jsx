import React, { useState } from 'react';

function SearchBar({ onSearch, onTrends, onRandom }) {
	const [search, setSearch] = useState('');

	return (
		<div className="container-search-bar">
			<input
				type="text"
				onChange={e => setSearch(e.target.value)}
				value={search}
				placeholder="Cats..."
			/>
			<input type="submit" onClick={() => onSearch(search)} value="Поиск GIF"/>
			<input type="button" onClick={onTrends} value="Трендовые GIF" />
			<input type="button" onClick={onRandom} value="Рандомная GIF" />
		</div>
	);
}

export default SearchBar;
