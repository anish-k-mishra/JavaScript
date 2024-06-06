console.log("2" > 1);  // prints true
console.log("02" > 1); // Js converts the string to number while comparison => prints true

console.log(null >= 0); //gives true
console.log(null == 0); //gives false
console.log(null > 0);  //gives false
//this is because comparison operators and equality operator work differently.
//the comparison operators >,<,>=,<= convert null to a number treating it as zero, but equality operator (==) does not do that

console.log("2" == 2); //gives true as JS converts the string to number before comparing
console.log("2" === 2); //gives false => === is strict check, i.e., checks the valuse along with datatype