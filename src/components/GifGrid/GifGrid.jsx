import React from 'react';
import GifItem from "../GifItem";

import './GifGrid.css';
import calculateParams from "../../utils/calculateParams";

function GifGrid({ arrayData }) {
	calculateParams(arrayData);
	return (
		<div className="container-gif-grid">
			{ arrayData.map(item => <GifItem key={item.slug} gifObject={item} />) }
		</div>
	)
}

export default GifGrid;
