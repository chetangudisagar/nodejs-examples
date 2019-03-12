const {Schema, model, SchemaTypes} = require('mongoose');
const employeeSchema = new Schema({
  employeeId: {
    type: SchemaTypes.Number,
    required: [true,
      'Validation failed because Employee ID is a mandatory field.'],
  },
  employeeName: {type: SchemaTypes.String},
  employeeEmail: {type: SchemaTypes.String},
});

const EmployeeModel = model('employeeTable', employeeSchema);

module.exports = {EmployeeModel};
