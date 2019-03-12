// main file
// require => commonjs

const math_funs = require ('./modules');
math_funs.add(2,3);
math_funs.div(2,0);
const {add, sub}  = require ('./modules');

add(3,3);