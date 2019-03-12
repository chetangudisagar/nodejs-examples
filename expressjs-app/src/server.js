console.log('app started');
const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const EventEmitter = require('events');

// require routes & repos here
const employeeRoutes = require('./api/employee-api');
const employeeRepo = require('./repository/employee-repo');
const userRoutes = require('./api/user-api');
const userRepo = require('./repository/user-repo');
const {auth} = require('./middlewares/authorization');

// listen to db events here
const mediator = new EventEmitter();

// db config file
require('./config/db')(mediator);

mediator.once('db.ready', () => {
  // app configurations here
  const app = express();
  app.use(auth);
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(helmet());

  // app routes here
  employeeRoutes(app, employeeRepo);
  userRoutes(app, userRepo);

  // server starts here
  app.listen(port, (err)=>{
    if (err) throw err;
    console.log('app started on http://localhost:3000');
  });
});

mediator.once('db.error', (err) => {
  // app configurations here
  console.log(err);
});
