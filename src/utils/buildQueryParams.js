/**
 *
 * @param url - Base url
 * @param params - GET params for base url
 * @returns {string} - result string for query
 */
const buildQueryParams = (url = '', params = {}) => {
	let query = '';
	for (let key in params) {
		if (params.hasOwnProperty(key)) {
			query += `${key}=${params[key]}&`;
		}
	}
	query = encodeURI(url + '?' + query);
	return query;
};

export default buildQueryParams;
