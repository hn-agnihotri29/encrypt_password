const md5 = require("md5");

let password = prompt("Enter Your password: ");
console.log(password);

let hashpaswoord = md5(password);
console.log(hashpaswoord);
