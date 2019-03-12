//single value properties
const name = 'demo';
const age = 21;

const user = {
    name,
    age
};

console.log(user);


const userObj = {
    userName: 'demo',
    userAge: 21
}

console.log(userObj.userName);
console.log(userObj.userAge);
console.log(userObj.key)
console.log(userObj['key'])
console.log(userObj['userAge']);

//destructuring syntax
const { userName } = userObj; // userful to extract some of the features of the entire package/library

console.log(userName);