const express = require('express');
const router = express.Router();
const middleware = require('./middleware');

router.use(function timeLog(req, res, next) {
	const ts = Date.now();

	const date_ob = new Date(ts);
	const date = date_ob.getDate();
	const month = date_ob.getMonth() + 1;
	const year = date_ob.getFullYear();
	const hours = date_ob.getHours();
	const minutes = date_ob.getMinutes();

	console.log(`[${date}.${month}.${year} ${hours}:${minutes}] `, req.url, ' from ', req.headers.origin);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	next();
});

router.get('/search', middleware.handleSearch);
router.get('/trends', middleware.handleTrends);
router.get('/random', middleware.handleRandom);

module.exports = router;
