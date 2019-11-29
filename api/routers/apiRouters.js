const express = require('express');
const router = express.Router();
const middleware = require('./middleware');

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	next();
});

router.get('/search', middleware.handleSearch);
router.get('/trends', middleware.handleTrends);
router.get('/random', middleware.handleRandom);

module.exports = router;
