const num = 400; //num is defined as a number by JS
const bal = new Number(100); //we specifically define the quantity bal as number for JS
console.log(num); //simply gives 400
console.log(bal); //give 100 in form of object

console.log(bal.toString()); //converts the number to string
console.log(bal.toFixed(1)); //gives the precision value of the number acc to the argument passed

const other = 28.2345
console.log(other.toPrecision(2)); //gives the precision of only those amount of numbers which are passed as an argument

const num2 = 1000000;
console.log(num2.toLocaleString()); //converts the given number in form of place value system in cludeing commas at desired place. Returns the number in form of a string
console.log(num2.toLocaleString('en-IN')); //converts the number in form of Indian Place Value sysytem

// *************Maths**************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5)); //rounds off the number
console.log(Math.ceil(4.3)); //gets the ceiling value (top)
console.log(Math.floor(4.3)); //gets the floor value (bottom)
console.log(Math.min(4, 3, 6, 8)); //gets the minimum value
console.log(Math.max(4, 3, 6, 8)); //gets the maximum value
console.log(Math.random()); //picks any random value b/w 0 and 1

console.log((Math.random()*10)+1); //printd any random number between 1 and 10

//let say we have two numbers min and max and we want to generate random numbers b/w min and max
let min = 10
let max = 30

console.log(Math.ceil(Math.random*(max-min+1))+min); //generates random numbers b/w min and max