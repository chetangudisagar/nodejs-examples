const fs = require('fs');
const { argv } = require('yargs');
const {EventEmitter} = require('events');
console.log(argv);
//npm run start
// node index.js --filename=demo.txt --name=mike --age=21
fs.appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });

class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.once('asdf', (asd) => {
    console.log('asdf');
})
myEmitter.emit('error', new Error('whoops!'));
myEmitter.emit('error', new Error('whoops!'));
myEmitter.emit('error', new Error('whoops!'));
myEmitter.emit('asdf', new Error('whoops!'));
myEmitter.emit('error', new Error('whoops!'));
myEmitter.emit('adsf', new Error('whoops!'));
// Prints: whoops! there was an error