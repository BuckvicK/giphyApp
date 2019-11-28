const express = require('express');
const router = express.Router();
const apiPath = require('./apiPath');
const LIMIT_GIF = 10;

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), req);
	next();
});

// Home page route.
router.get('/', function (req, res) {
	res.send('Api home page');
});

// About page route.
router.get('/about', function (req, res) {
	res.send('About this api');
});

const request = require('request');
const url = '<ВАШ_URL>'; // http://www.mysite.ru/index.php

request({
	method: 'GET',
	url: url,
	// параметры GET-запроса
	// index.php?param=edit&value=10
	qs: {
		param: 'edit',
		value: 100
	}
}, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		// console.log(body);
		// валидация и
		// обработка полученного ответа, заголовков
		answer = body;
	}
})

router.get('/search', function (req, res) {
	const { q, limit, offset } = req.query;
	res.send('Search');
	const getSearchGif	= (query, offset = 0, limit = LIMIT_GIF) =>
		fetch(`${apiPath.API_REQUEST_SEARCH_GIF}${buildQueryParams(
			{
				q: query,
				offset,
				limit,
			}
		)}`).then(res => res.json());
	res.send(getSearchGif(q, offset, limit));
});

module.exports = router;
