import React from 'react';
import GifItem from "../GifItem";

import './GifGrid.css';
import { calculateParams } from "../../utils";

const MAX_WIDTH = document.documentElement.clientWidth;

function GifGrid({ arrayData }) {
	calculateParams(arrayData, MAX_WIDTH);

	return (
		<div style={{ width: `${MAX_WIDTH}px`, margin: '0 auto' }} className="container-gif-grid">
			{ arrayData.map((item, index) => <GifItem key={`${index}-${item.slug}`} gifObject={item} />) }
		</div>
	)
}

export default GifGrid;
