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
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			res.send(body);
		}
	});
}

function handleTrends(req, res) {
	const { limit, offset } = req.query;
	const url = `${apiPath.API_REQUEST_TRENDS_GIF}`;
	const test = request({
		method: 'GET',
		url: url,
		qs: {
			limit,
			offset,
		}
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(body);
			res.send(body);
		} else {
			res.send(body);
		}
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
		if (!error && response.statusCode === 200) {
			console.log(body);
			res.send(body);
		} else {
			res.send(body);
		}
	});
}

module.exports = {
	handleSearch,
	handleTrends,
	handleRandom,
};
