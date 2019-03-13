const {verifyToken} = require('../repository/user-repo');

const auth = (request, response, next) => {
  console.log(request.headers);
  let token = request.headers['authorization'];
  token = token.split(' ')[1];
  console.log('7 - ' + token);
  if (verifyToken(token)) {
    next();
  } else {
    response.status(401).send();
  }
};

module.exports = {auth};
