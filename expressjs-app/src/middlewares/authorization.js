const auth = (request, response, next) => {
  console.log('demo authorization by middleware');
  next();
};

module.exports = {auth};
