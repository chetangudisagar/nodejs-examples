const {UserModel} = require('../models/user-model');
const addUser = (user) => {
  return new Promise(
      (resolve, reject) => {
        const userModel = new UserModel(user);
        userModel.save((err) => {
          if (err) {
            console.log('error in repo while saving');
            reject(err);
          }
          resolve('user added successfully!');
        });
      }
  );
};

const checkUser = (email, password) => {
  return UserModel.findOne({userEmail: email, userPassword: password});
};

module.exports = {addUser, checkUser};
