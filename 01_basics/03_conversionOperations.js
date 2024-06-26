let score = "33"
let score2 = "33abc"

console.log(typeof score); //will give string
console.log(typeof score2); //will give string

let score3 = Number(score) //converts the string to number 
console.log(typeof score3); //will give number

let score4 = Number(score2) //converts the string 33abc to number datatype (though not possible, still converts it.... drawback of JS)
console.log(typeof score4); //will give number (which is practically not possible for a string like "33abc")

console.log(score4);  //this returns NaN (Not a Number)

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn) //converts isLoggedIn to boolean datatype
console.log(booleanLoggedIn); 

// 1 => true, 0=> false
// "" => false, "Anish" => true

let no = 33
let strno = String(no)  //converts number to string
console.log(strno);
console.log(typeof strno);

let str1 = "Hello"
let str2 = " Anish"
console.log(str1 + str2); //concatenates both the strings

console.log(1 + "2");  //because a string is present, so concatenation takes place
console.log("1" + 2);  //because of the string concatenation takes place
console.log("1" + 2 + 2); //string is encountered first, so all are treated as strings
console.log(1 + 2 + "2"); //number is encountered first, so initial conversion is done followed by string concatenation