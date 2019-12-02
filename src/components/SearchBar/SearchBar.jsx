import React, { useState } from 'react';
import Input from "@material-ui/core/Input";
import './SearchBar.css';

function SearchBar({ onTrends, onRandom, onSearch, active }) {
	const [search, setSearch] = useState('');
	const cn = {
		trends: active === 'trends' ? "active" : "",
		random: active === 'random' ? "active" : "",
		search: active === 'search' ? "active" : "",
	};

	return (
		<nav className="container-search-bar">
			<ul>
				<li className={cn.trends} onClick={onTrends}>Trends</li>
				<li className={cn.random} onClick={onRandom}>Random</li>
				<li className={`container-search-bar__input ${cn.search}`}>
					<Input
						onChange={e => setSearch(e.target.value)}
						value={search}
						placeholder="Cats..."
						variant="outlined"
						onKeyDown={(e) => e.key === 'Enter' ? onSearch(search) : ''}
					/>
					<i className="fas fa-search" onClick={() => onSearch(search)}/>
				</li>
			</ul>
		</nav>
	);
}

export default SearchBar;
