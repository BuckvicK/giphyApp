/**
 *
 * @param row - Array images for changed size
 * @param MAX_WIDTH - Max width row
 * @param MAX_HEIGHT - Max height row *** While there is this signature - it does not count ***
 */
function resizeInRow(row = [], MAX_WIDTH, MAX_HEIGHT) {
	let curWidth = row.reduce((a, item) => a + parseInt(item.images.fixed_height.width), 0);
	// let freeSpace = MAX_WIDTH - curWidth;
	let k = MAX_WIDTH / curWidth;
	// console.debug('[INITIAL]', `curWidth=${curWidth}`, `freeSpace=${freeSpace}`, `k=${k}`);
	row.map((item) => {
		let newWidth = parseInt(item.images.fixed_height.width) * k;
		let newHeight = parseInt(item.images.fixed_height.height) * k;
		if (MAX_HEIGHT && newHeight > MAX_HEIGHT) {
			console.log('WARNING');
			const down = MAX_HEIGHT / newHeight;
			newWidth = newWidth * down;
			newHeight = newHeight * down;
		}
		item.images.fixed_height.width = (newWidth).toString();
		item.images.fixed_height.height = (newHeight).toString();
		return item;
	});
	// curWidth = row.reduce((a, item) => a + parseInt(item.images.fixed_height.width), 0);
	// freeSpace = MAX_WIDTH - curWidth;
	// console.debug('[RESULT]', `curWidth=${curWidth}`, `freeSpace=${freeSpace}`);
}

/**
 *
 * @param array - Array images
 * @param MAX_WIDTH_ROW - Max width row
 * @param MAX_HEIGHT_ROW - Max height row
 * @returns {Array} - Result array with changed width and height in images
 */
function calculateParams(array = [], MAX_WIDTH_ROW = 900, MAX_HEIGHT_ROW = 300) {
	let rowWidth = 0;
	array.reduce((accumulator, current, index, array) => {
		if (rowWidth + parseInt(current.images.fixed_height.width) <= MAX_WIDTH_ROW) {
			rowWidth += parseInt(current.images.fixed_height.width);
			accumulator.push(current);
		} else {
			resizeInRow(accumulator, MAX_WIDTH_ROW);
			accumulator = [current];
			rowWidth = parseInt(current.images.fixed_height.width);
		}
		if (index === array.length - 1) {
			resizeInRow(accumulator, MAX_WIDTH_ROW);
		}
		return accumulator;
	}, []);
	return array;
}

export default calculateParams;
