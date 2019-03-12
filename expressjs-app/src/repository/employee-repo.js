const {EmployeeModel} = require('../models/employee-model');
const addEmployee = (employee) => {
  return new Promise(
      (resolve, reject) => {
        const emp = new EmployeeModel(employee);
        emp.save((err) => {
          if (err) {
            // console.log('error in repo while saving');
            reject(err);
          }
          resolve('employee added successfully!');
        });
      }
  );
};

const findEmployee = (employee) => {
  console.log(employee);
  return new Promise(
      (resolve, reject) => {
        EmployeeModel.find({employeeId: employee.employeeId}, (err, result) => {
          if (err) reject(err);
          console.log(result);
          resolve(result);
        });
      }
  );
};

const getEmployee = () => {
  return EmployeeModel.find();
};

const getEmployeeById = (id) => {
  return EmployeeModel.find({employeeId: id});
};

const removeEmployeeById = (id) => {
  return EmployeeModel.findOneAndDelete({employeeId: id});
};

const updateEmployeeById = (id, emp) => {
  return EmployeeModel.findOneAndUpdate({employeeId: id}, emp);
};

module.exports = {getEmployee, getEmployeeById, removeEmployeeById, 
  updateEmployeeById, addEmployee, findEmployee};
