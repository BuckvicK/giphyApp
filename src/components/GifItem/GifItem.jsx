import React from 'react';
import PropTypes from 'prop-types';

import './GifItem.css';

class GifItem extends React.Component {
	render() {
		const { slug, images, username, import_datetime } = this.props.gifObject;
		const { url } = images.fixed_height;
		return (
			<div className="container-gif-item">
				<div style={{ display: 'none' }}>
					<div>Username: {username}</div>
					<div>Data: {import_datetime}</div>
				</div>
				<div className="container-img">
					<img src={url} alt={slug} />
				</div>
			</div>
		);
	}
}

GifItem.propTypes = {
	gifObject: PropTypes.object.isRequired,
};

export default GifItem;
