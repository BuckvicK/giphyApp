const buildQueryParams = (params = {}) => {
	let query = '';
	for (let key in params) {
		if (params.hasOwnProperty(key)) {
			query += `${key}=${params[key]}&`;
		}
	}
	return query;
};

export default buildQueryParams;
