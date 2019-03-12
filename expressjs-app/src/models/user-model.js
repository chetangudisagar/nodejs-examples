const {Schema, model, SchemaTypes} = require('mongoose');
const userSchema = new Schema({
  userEmail: {type: SchemaTypes.String,
    required: [true,
      'Validation failed because User Email is a mandatory field.']},
  userPassword: {type: SchemaTypes.String,
    required: [true,
      'Validation failed because User Password is a mandatory field.']},
  userToken: {type: SchemaTypes.String},
});

const UserModel = model('userTable', userSchema);

module.exports = {UserModel};
