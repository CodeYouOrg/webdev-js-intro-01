// Prevent us from attempting to use variables
// that are not declared
"use strict"
const one = 1;
const more = 75;
const one = 76;//Uncaught SyntaxError: Identifier 'one' has already been declared
                //This means that the variable "one " has already been assigned and can not be reassigned.
let user = "diane";
console.log(user);

user = "Dan";
console.log(Dan);//favicon.ico:1 
        
        
//Failed to load resource: the server responded with a status of 404 (Not Found)