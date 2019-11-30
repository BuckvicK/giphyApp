import React from 'react';
import GifItem from "../GifItem";

import './GifGrid.css';
import { calculateParams } from "../../utils";

const MAX_WIDTH = document.documentElement.clientWidth;

function GifGrid({ arrayData, placeholder = 'No data for display...' }) {
	calculateParams(arrayData, MAX_WIDTH);

	if (arrayData.length === 0){
		return (
			<div style={{ textAlign: "center" }}>
				{placeholder}
			</div>
		);
	}
	return (
		<div style={{ width: `${MAX_WIDTH}px`, margin: '0 auto' }} className="container-gif-grid">
			{ arrayData.map((item, index) => <GifItem key={`${index}-${item.slug}`} gifObject={item} />) }
		</div>
	)
}

export default GifGrid;
