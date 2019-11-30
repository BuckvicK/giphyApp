const request = require('request');
const apiPath = require('./apiPath');

function handleSearch(req, res) {
	const {q, limit, offset} = req.query;
	const url = `${apiPath.API_REQUEST_SEARCH_GIF}`;
	request({
		method: 'GET',
		url: url,
		qs: {
			q,
			limit,
			offset,
		}
	}, function (error, response, body) {
		res.send(body);
	});
}

function handleTrends(req, res) {
	const { limit, offset } = req.query;
	const url = `${apiPath.API_REQUEST_TRENDS_GIF}`;
	request({
		method: 'GET',
		url: url,
		qs: {
			limit,
			offset,
		}
	}, function (error, response, body) {
		res.send(body);
	});
}

function handleRandom(req, res) {
	const { limit, offset } = req.query;
	const url = `${apiPath.API_REQUEST_RANDOM_GIF}`;
	request({
		method: 'GET',
		url: url,
		qs: {
			limit,
			offset,
		}
	}, function (error, response, body) {
		res.send(body);
	});
}

module.exports = {
	handleSearch,
	handleTrends,
	handleRandom,
};
