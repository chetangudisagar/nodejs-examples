// employee routes
const status = require('http-status');

module.exports = (app, repo) => {
  app.post('/register', (request, response) => {
    repo.addUser(request.body)
        .then((user) => {
          console.log('added user - ' + user);
          {return repo.updateToken(user.userEmail);}
        })
        .then((data) => {
          response.status(status.CREATED)
              .json({access_token: data['userToken']});
        })
        .catch((err) => {
          console.log('5 - ' + err);
          response.status(status.PRECONDITION_FAILED).json({error: err});
        });
  });
  app.post('/login', (request, response) => {
    repo.checkUser(request.body.userEmail, request.body.userPassword)
        .then((user) => {
          console.log('6 - ' + user);
          console.log('added user - ' + request.body.userEmail);
          {return repo.updateToken(request.body.userEmail);}
        })
        .then((data) => {
          console.log(data);
          response.status(status.OK).json({access_token: data['userToken']});
        })
        .catch((err) => {
          console.log(err);
          response.status(status.PRECONDITION_FAILED).json({error: err});
        });
  });
};
