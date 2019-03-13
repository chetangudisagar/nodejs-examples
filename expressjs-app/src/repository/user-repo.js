const {UserModel} = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/config');
const addUser = (user) => {
  // return new Promise(
  //     (resolve, reject) => {
  return hashPassword(user.userPassword).then(
      (data) => {
        console.log('encrypted data is - ' + data);
        user.userPassword = data; // udpate password with hash
        return UserModel.create(user);
      }
  ).catch(
      (err) => {
        console.log(err);
        Promise.reject(err);
      }
  );
};

const checkUser = (email, password) => {
  return UserModel.findOne({userEmail: email})
      .then(
          (user) => {
            if (user) {
              console.log('checkuser ' + user);
              return comparePassword(password, user.userPassword);
            }
          })
      .then(
          (data) => {
            console.log('1 - ' + data);
            return Promise.resolve(data);
          }
      )
      .catch(
          (err) => {
            console.log('2 - ' + err);
            return Promise.reject(err);
          }
      );
};

const hashPassword = (pwd) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(pwd, salt, function(err, hash) {
        // Store hash in password db.
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (myPlaintextPassword, hash) => {
  console.log(myPlaintextPassword);
  console.log(hash);
  return new Promise((resolve, reject) => {
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
      if (err) {
        console.log('3' + err);
        reject(err);
      }
      if (res===true) {
        resolve(res);
      }
      resolve(res);
    });
  });
};

const updateToken = (email) => {
  console.log('secret is - ' + SECRET);
  const token = jwt.sign( {email}, SECRET);
  console.log('token is - ' + token);
  return UserModel.findOneAndUpdate(
      {userEmail: email},
      {userToken: token},
      {new: true}
  )
  // .then(
  //     (data) => {
  //       console.log(data);
  //     }
  // ).catch(
  //     ( (err) => {
  //       console.log(err);
  //       // Promise.reject(err);
  //     })
  // )
  ;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    console.log('8 - '+ decoded);
    return true;
  } catch (err) {
    return false;
  }
};


module.exports = {addUser, checkUser, updateToken, verifyToken};
