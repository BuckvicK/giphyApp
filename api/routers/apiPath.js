const config = require('../config');

const API_SEARCH = 'https://api.giphy.com/v1/gifs/search';
const API_REQUEST_SEARCH_GIF = `${API_SEARCH}?api_key=${config.API_KEY}&`;

module.exports = {
	API_SEARCH,
	API_REQUEST_SEARCH_GIF,
};
