import React from 'react';
import GifItem from "../GifItem";

import './GifGrid.css';
import { calculateParams } from "../../utils";

function GifGrid({ arrayData }) {
	calculateParams(arrayData);
	return (
		<div className="container-gif-grid">
			{ arrayData.map((item, index) => <GifItem key={`${index}-${item.slug}`} gifObject={item} />) }
		</div>
	)
}

export default GifGrid;
