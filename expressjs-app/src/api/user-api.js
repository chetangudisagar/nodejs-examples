// employee routes
const status = require('http-status');

module.exports = (app, repo) => {
  app.post('/register', (request, response) => {
    repo.addUser(request.body)
        .then((data) => {
          response.status(status.CREATED).json({message: data});
        })
        .catch((err) => {
          response.status(status.PRECONDITION_FAILED).json({error: err});
        });
  });
  app.post('/login', (request, response) => {
    repo.checkUser(request.body.userEmail, request.body.userPassword)
        .then((user) => {
          console.log(user);
          response.status(status.OK).json({message: user});
        })
        .catch((err) => {
          response.status(status.PRECONDITION_FAILED).json({error: err});
        });
  });
};
