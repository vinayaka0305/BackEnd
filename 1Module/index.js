//to import from the helper file

const global = require("./helper")
// we have to store the fileName in varibel and by using require keyword;
//require is like a import 

console.log(global.add(3,3));
console.log(global.sub(10,5));
// like this we can able to call that functions and we can pass parameter here;
// to run this we have put that particular file where we are calling and consoling
//here index is the main file because here we are importing
//index is the main module and helper is the sub module
//sub file is importing inside the main file    

