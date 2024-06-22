//Some values are just considered to be true or false
const email = "anish@gmail.com"
if(email){ //if email has any string value, then it is considered as true, but if it is an empty string then it is considered as false. If it is an empty array, then it is true.
    console.log("Got an email value");
}
else{
    console.log("Not got an email value");
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
//all the values which are not falsy are truthy

//some surprising truthy values -> "0", "false", " ", [], {}, function(){}

//Nullish Coalescing operator (??) : null, undefined
let val1;
val1 = 5 ?? 10; //in this case 5 gets assigned in the val1
let val2 = null ?? 10; //in this case 10 is assigned to val2. ?? operator checks the safety of the null value. If null is the value, then simply assign it, else assign the value recieved from the function call

//Terniary operator
//condition ? true : false

const price = 100
price>100 ? console.log("grater than 100") : console.log("Less than or equals to 100");// this gives output as Less than or equal to 100, as the condition given is false, and false case will get executed


