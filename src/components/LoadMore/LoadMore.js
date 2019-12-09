import React from "react";

import "./LoadMore.css";

function LoadMore({ handleMore }) {
	return (
		<div className="container-load-more" onClick={handleMore}>
			<i className="fas fa-chevron-down" />
		</div>
	);
}

export default LoadMore;
