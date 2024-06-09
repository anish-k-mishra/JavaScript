let name = "Anish"
let count = 6
console.log(name + count + " Repositories"); //Not at all recommended (Returns: "Anish6 Repositories")

console.log(`Hello my name is ${name} and my repository count is ${count}`); //Recommended, and a modern way of writing (Known as String Interpolation)

const anotherName = new String("Anish")  //another way to declare a string
 // A string is stored as a key value pair in the memory in JS, just like an object

console.log(name[0]); //will return "A"
console.log(anotherName.length); //returns the length of the string
console.log(name.length);
console.log(name.toUpperCase()); //one of the methods of the strings to convert the entirre string to upper case
console.log(name.charAt(2));  //returns the character at given index
console.log(name.indexOf('h')); //returns the index of given character

console.log(name.substring(0, 4)); //prints the substring from name from 0 position to 3rd position (excludes the last)

console.log(anotherName.slice(-5, 2)); //this also accepts -ve values, for -ve values, the string will br in opposite order

let newName = "   Anish   "
console.log(newName);
console.log(newName.trim()); // removes all the unwanted spaces from the string

let url = "https//anish.com/mishra%20anish"
console.log(url.replace('%20','-')); //replaces the phrase %20 with - in the given string

console.log(url.includes('anish')); // tells if the string url contains the string "Anish" or not
console.log(url.includes('rldse')); // tells if the string url contains the string "rldse" or not

let ano = "Anish-kr-mishra"
console.log(ano.split('-')); //this function converts the string to array based on a separator specified in the function itself