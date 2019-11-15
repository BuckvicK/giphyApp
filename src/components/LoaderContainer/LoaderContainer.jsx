import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import './LoaderContainer.css';

function LoaderContainer({ isLoading, children}) {
	return(
		<div className="container-loader">
			{isLoading ? <CircularProgress /> : null}
			<div style={ isLoading ? { display: "none" } : {}}>{children}</div>
		</div>
	);
}

export default LoaderContainer;
