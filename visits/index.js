const express = require('express');
const redis = require('redis');

//  New instance of express application
const app = express();
 // Connection to our redis server
const client = redis.createClient({
	host: 'redis-server'
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});