console.log('app started');
const express = require('express');
const status = require('http-status');
const port = 3000;
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const {MongoClient} = require('mongodb');
const {DB} = require('./src/config/config.js');
const assert = require('assert');

// app creation & setup
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());

const url = `${DB.HOST}:${DB.PORT}`;


// Database Name
const dbName = `${DB.NAME}`;

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  db.collection('demo').insert({demo: 'test'});

  client.close();
});

// app method(route, callback)
app.get('/', (request, response) => {
  response.status(status.CREATED).json({'test': '2demo', 'data': 'new data'});
});


app.get('/:id?', (request, response) => {
  response.status(status.OK).json({'tests': '2demo', 'data': 'new data',
    'id': request.params.id});
});

app.post('/', (request, response) => {
  console.log(request);
  response.json(request.body);
});

// server starts here
app.listen(port, (err)=>{
  if (err) throw err;
  console.log('app started on http://localhost:3000');
});
