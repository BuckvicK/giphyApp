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
		const { url, height, width } = images.fixed_height;
		const { isLoading } = this.state;

		// console.log(this.props.gifObject);
		return (
			<div className="container-gif-item">
				<LoaderContainer isLoading={isLoading}>
					<div
						className="container-img"
						style={{ width: `${width}px`, height: `${height}px` }}
					>
						<div className="visible-hover">
							<div className="container-user-info">
								<span>{`${username ? username : 'anonymous'}`}</span>
								<span>{`${import_datetime.toString().split(' ')[0]}`}</span>
							</div>
							<div>
								<ul className="container-links" style={{ display: "none"}}>
									<li className="link"><a href="/">1</a></li>
									<li className="link"><a href="/">2</a></li>
								</ul>
								<div className="copy-link">
									<input type="text" value={images.original.url} readOnly />
									<a
										href={images.original.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										Go to original
									</a>
								</div>
							</div>
							<div className="container-copyright">
								<span>Source - GIPHY 2019 year</span>
							</div>
						</div>
						<img
							src={url}
							alt={slug}
							style={{ width: `${width}px`, height: `${height}px`}}
							onLoad={() => this.setState({ isLoading: false })}
						/>
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
