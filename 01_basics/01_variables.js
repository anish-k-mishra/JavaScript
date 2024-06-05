const id = 123               //id can not be modified further as it is initialized with const variable
let name = "Anish"           //one way to declare a variable
var email = "anishmishra@google.com"  //another way to declare a variable (used very rarely because of the problem of block scope and functional scope)
passwd = "123456"            // yet another way to declare a variable in JS (not a good practice)
let state; //in this case the value of this variable is undefined
console.log(id);
console.table([id, name, email, passwd, state]) // prints all the variables mentioned in the square brackets in the form of a table

/*Use od var keyword for the declaration of variables is very rare, nearly null because of the problem of block scope and functional scope */


