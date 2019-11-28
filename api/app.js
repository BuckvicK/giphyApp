console.clear();

const express = require('express');
const app = express();
const PORT = 3001;
const apiRouters = require('./routers/apiRouters');

app.use('/api', apiRouters);

app.get('/', (req, res) => {
	// console.log('TEST');
	res.send('Hello World!');
	// console.log(req);
});

app.listen(PORT, () => console.log(`\
Server app listening on PORT ${PORT}!
http://localhost:${PORT}\
`));

// const config = require('./config');
//
// const MongoClient = require('mongodb').MongoClient;
// const mongoClient = new MongoClient(config.URL, { useNewUrlParser: true, useUnifiedTopology: true });
//
// mongoClient.connect((err, client) => {
// 	const collection = client.db("sample_airbnb").collection("listingsAndReviews").findOne(function(err, r){
// 		console.log(r);
// 		client.close();
// 	});
// 	console.log(collection);
// 	// const col = client.db("sample_airbnb").collections().then(console.log);
// 	// console.log(col);
// 	// client.close();
// });
