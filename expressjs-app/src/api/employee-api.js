// employee routes
const status = require('http-status');

module.exports = (app, repo) => {
  app.post('/employee', (request, response) => {
    repo.addEmployee(request.body)
        .then((data) => {
          response.status(status.CREATED).json({message: data});
        })
        .catch((err) => {
          response.status(status.PRECONDITION_FAILED).json({error: err});
        });
  });
  app.post('/find', (request, response) => {
    repo.findEmployee(request.body)
        .then((data) => {
          response.status(status.CREATED).json({message: data});
        })
        .catch((err) => {
          response.status(status.OK).json({error: err});
        });
  });

  app.get('/employee/:id', (request, response) => {
    // find by id
    if (request.params['id']) {
      repo.getEmployeeById(request.params['id'])
          .then((emp) => {
            if (!emp) {
              response.status(status.NO_CONTENT).send();
              // send will send as a text unlike json()
            } else response.status(status.OK).json(emp);
          });
    } else {
      // get all employees
      repo.getEmployee()
          .then((emp) => response.json(emp))
          .catch((err) => response
              .status(status.NO_CONTENT)
              .send(`Unable to fetch any employees at this moment.
               Error is - ` + err));
    }
  });

  app.delete('/employee/:id', (request, response) => {
    // find by id and delete
    if (request.params['id']) {
      repo.removeEmployeeById(request.params['id'])
          .then((emp) => {
            console.log(emp);
            if (!emp) {
              response.status(status.NOT_FOUND)
                  .send('Unable to find any employee with that ID.');
            } else response.status(status.OK).json(emp);
          })
          .catch((error) => {
            console.log(error);
            response.status(status.NO_CONTENT).send(error);
          });
    }
  });

  app.put('/employee/:id', (request, response) => {
    // find by id and delete
    if (request.params['id']) {
      repo.updateEmployeeById(request.params['id'], request.body)
          .then((emp) => {
            console.log(emp);
            if (!emp) {
              response.status(status.NOT_FOUND)
                  .send('Unable to find any employee with that ID.');
            } else response.status(status.OK).json(emp);
          })
          .catch((error) => {
            console.log(error);
            response.status(status.NO_CONTENT).send(error);
          });
    }
  });
};
