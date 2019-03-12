// DB connections here
const mongoose = require('mongoose');
const {DB} = require('../../config.js');

module.exports = (mediator) => {
  console.log('-----------connecting to DB-------------');
  const url = `${DB.HOST}:${DB.PORT}/${DB.NAME}`;
  mongoose.Promise = global.Promise;
  const config = {
    autoIndex: false,
    userNewUrlParser: true,
  };
  mongoose.connect(url, config);
  const db=mongoose.connection;
  db.on('error', (err) => {
    // failed to connect
    mediator.emit('db.error', err);
  });
  db.once('open', () => {
    // we are connected!
    mediator.emit('db.ready');
  });
};
