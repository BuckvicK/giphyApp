/* eslint-disable no-unused-vars */
import React from 'react';
import LoaderContainer from "../LoaderContainer";
import * as PropTypes from 'prop-types';

import './GifItem.css';

class GifItem extends React.Component {
	state = {
		isLoading: true,
	};

	render() {
		const { slug, images, username, import_datetime } = this.props.gifObject;
		const { url } = images.fixed_height;
		const { isLoading } = this.state;
		return (
			<div className="container-gif-item">
				<LoaderContainer isLoading={isLoading}>
					<div>Hi</div>
					<div>123</div>
				<div style={{ display: 'none' }}>
					<div>Username: {username}</div>
					<div>Data: {import_datetime}</div>
				</div>
				<div className="container-img">
					<img src={url} alt={slug} onLoad={() => this.setState({ isLoading: false })} />
				</div>
				</LoaderContainer>
			</div>
		);
	}
}

GifItem.propTypes = {
	gifObject: PropTypes.object.isRequired,
};

export default GifItem;
