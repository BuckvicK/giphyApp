console.clear();

console.log(process.env.API_KEY);
console.log(process.env.API_PORT);

const express = require('express');
const app = express();
const config = require('./config');
const PORT = config.API_PORT;
const apiRouters = require('./routers/apiRouters');

app.use('/api', apiRouters);

app.listen(PORT, () => console.log(`\
Server app listening on PORT ${PORT}!
http://localhost:${PORT}\
`));

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
