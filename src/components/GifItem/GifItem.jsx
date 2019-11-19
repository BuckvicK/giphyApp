/* eslint-disable no-unused-vars */
import React from 'react';
import LoaderContainer from "../LoaderContainer";
import * as PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './GifItem.css';

class GifItem extends React.Component {
	state = {
		isLoading: true,
		isCopy: false,
	};

	toggleLoading = isLoading => this.setState({ isLoading });

	toggleIsCopy = (text, isCopy) => this.setState({ isCopy });

	render() {
		const { slug, images, title } = this.props.gifObject;
		const { url, height, width } = images.fixed_height;
		const { isLoading, isCopy } = this.state;

		const copy_url = images.original.url.split('?')[0];

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
								<span>{`${title}`}</span>
							</div>
							<div>
								<ul className="container-links" style={{ display: "none"}}>
									<li className="link"><a href="/">1</a></li>
									<li className="link"><a href="/">2</a></li>
								</ul>
								<div className="copy-link">
									<input type="text" value={copy_url} readOnly />
								</div>
								<div className="copy-link">
									<CopyToClipboard text={copy_url} onCopy={this.toggleIsCopy}>
										<span>{isCopy ? 'Success!' : 'Copy link'}</span>
									</CopyToClipboard>
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
							onLoad={() => this.toggleLoading(false)}
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
