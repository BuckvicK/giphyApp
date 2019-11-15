function resizeInRow(row = [], MAX_WIDTH, MAX_HEIGHT) {
	let curWidth = row.reduce((a, item) => a + parseInt(item.images.fixed_height.width), 0);
	// let freeSpace = MAX_WIDTH - curWidth;
	let k = MAX_WIDTH / curWidth;
	// console.debug('[INITIAL]', `curWidth=${curWidth}`, `freeSpace=${freeSpace}`, `k=${k}`);
	row.map((item) => {
		item.images.fixed_height.width = (parseInt(item.images.fixed_height.width) * k).toString();
		item.images.fixed_height.height = (parseInt(item.images.fixed_height.height) * k).toString();
		return item;
	});
	// curWidth = row.reduce((a, item) => a + parseInt(item.images.fixed_height.width), 0);
	// freeSpace = MAX_WIDTH - curWidth;
	// console.debug('[RESULT]', `curWidth=${curWidth}`, `freeSpace=${freeSpace}`);
}

function calculateParams(array = [], MAX_WIDTH_ROW = 900, MAX_HEIGHT_ROW = 500) {
	let rowWidth = 0;
	array.reduce((accumulator, current, index, array) => {
		if (rowWidth + parseInt(current.images.fixed_height.width) <= MAX_WIDTH_ROW) {
			rowWidth += parseInt(current.images.fixed_height.width);
			accumulator.push(current);
		} else {
			resizeInRow(accumulator, MAX_WIDTH_ROW, MAX_HEIGHT_ROW);
			accumulator = [current];
			rowWidth = parseInt(current.images.fixed_height.width);
		}
		if (index === array.length - 1) {
			resizeInRow(accumulator, MAX_WIDTH_ROW, MAX_HEIGHT_ROW);
		}
		return accumulator;
	}, []);
	return array;
}

export default calculateParams;
