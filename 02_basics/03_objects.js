//Objects can be declared by 2 ways -> Singleton and Object Litrals

//Singleton
//Object.create

//Object Litrals

const mySym = Symbol("mykey") //symbol, we want to declare this symbol as a key in the on=bject and then print it as symbol only
const user = {
    name : "Anish",
    "Full Name" : "Anish Mishra",  //this property cannot be accessed by using user.Full Name. 
    age : 21,
    location : "Ranchi",
    email : "anish@google.com",
    loggedIn : false,
    [mySym] : "myKey1", //this is the syntax of using a symbol as a key within an object
    lastLogInDay : ["Mon", "Thurs", "Sat"]
}

console.log(user.email); //accessing the features of the object
console.log(user["email"]); //another method of accessing the properties of that object
console.log(user["Full Name"]); //this property can only be accessed in this format
console.log(user[mySym]); //syntax for accessing the symbol present in the object

user.email = "anish@yahoo.com"  //changing the property of the object

//Object.freeze(user) //now we cannot change the properties of the object

//adding a function in the object
user.greeting = function(){
    console.log("Hello JavaScript user");
}

console.log(user.greeting); //dos not execute the function, just returns its reference
console.log(user.greeting()); //executes the function

user.greetingTwo = function(){
    console.log(`Hello JavaScript user, ${this.name}`); //referencing the properties of same object in the function
}
console.log(user.greetingTwo());