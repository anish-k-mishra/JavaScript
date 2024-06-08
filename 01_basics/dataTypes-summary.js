//primitive
//7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //number
const sco = 100.3 //number 

const loggedIn = false //boolean

const temp = null
let email; //this value will be undefined inherently

const id = Symbol("123")
const ID = Symbol("123")
console.log(id ===ID); //returns false as we have used Symbol datatype => even if same input is passed, still it stores the same values differently, thats the basic role of Symbol datatype

//Reference type
//Arrays, Objects, Function

const arr = ["Shaktimaan", "Krrish", "Naagraj", "Batman", "Joker"]

let myObj = {
    name: "Anish",
    age: 21,
    education: "B.Tech",
}

const myFunc = function(){
    console.log("Hello World");
}

