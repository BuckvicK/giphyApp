import React, { useState } from 'react';

function SearchBar({ onSearch }) {
	const [search, setSearch] = useState('');

	return (
		<div className="container-search-bar">
			<input
				type="text"
				onChange={e => setSearch(e.target.value)}
				value={search}
			/>
			<input type="button" onClick={() => onSearch(search)} value="Поиск"/>
		</div>
	);
}

export default SearchBar;
