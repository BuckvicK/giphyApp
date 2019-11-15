import React from 'react';
import GifItem from "../GifItem";

import './GifGrid.css';

function GifGrid({ arrayData }) {
	return (
		<div className="container-gif-grid">
			{ arrayData.map(item => <GifItem key={item.slug} gifObject={item} />) }
		</div>
	)
}

export default GifGrid;
