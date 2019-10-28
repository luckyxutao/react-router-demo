const pathToRegExp = require('path-to-regexp');
const url = '/user';
const keys = []
let reg = pathToRegExp(url,keys,{end:false});
// let reqPathName = '/user/255/beijing';;
let reqPathName = '/user';;
console.log(reqPathName.match(reg));
// console.log(reg.test(reqPathName))
// console.log(reqPathName.match(reg))