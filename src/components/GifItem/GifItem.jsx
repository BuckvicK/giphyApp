import React from 'react';
import PropTypes from 'prop-types';

import './GifItem.css';

class GifItem extends React.Component {
	render() {
		const { image_url, slug } = this.props.gifObject;
		console.log(this.props.gifObject);
		return (
			<div className="container-gif-item">
				<div className="container-img">
					<img src={image_url} alt={slug} />
				</div>
			</div>
		);
	}
}

GifItem.propTypes = {
	gifObject: PropTypes.object.isRequired,
};

export default GifItem;
