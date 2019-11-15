import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import './LoaderContainer.css';

function LoaderContainer({ isLoading, children}) {
	return(
		<div className="container-loader">
			{isLoading ?
				<div className="loader">
					<CircularProgress />
				</div> : null}
			{children}
		</div>
	);
}

export default LoaderContainer;
