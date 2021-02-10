
// JavaScript Variables
const constVar = 'constant'; // the value of const variables cannot be changed once set
var globalVar = 'global'; // var defines a variable with global scope; it can be used anywhere and retains it's value once set 
let scopedVar = 'scoped'; // let defines a variable with block scope; it can only be accessed within the scope where it is declared or passed as an argument


var e = 5;
for (var e = 0; e < 10; e++) {
  // some statements
}
document.write(e + "<br/>");

let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
document.write(i + "<br/>");

