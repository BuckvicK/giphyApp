const config = require('../config');

const API_SEARCH = 'https://api.giphy.com/v1/gifs/search';
const API_TREND = 'https://api.giphy.com/v1/gifs/trending';
const API_RANDOM = 'https://api.giphy.com/v1/gifs/random';
const API_REQUEST_SEARCH_GIF = `${API_SEARCH}?api_key=${config.API_KEY}&`;
const API_REQUEST_TRENDS_GIF = `${API_TREND}?api_key=${config.API_KEY}&`;
const API_REQUEST_RANDOM_GIF = `${API_RANDOM}?api_key=${config.API_KEY}&`;

module.exports = {
	API_REQUEST_SEARCH_GIF,
	API_REQUEST_TRENDS_GIF,
	API_REQUEST_RANDOM_GIF,
};
