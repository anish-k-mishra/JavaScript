const user = {
    name: "Anish",
    age: 19,
    welcome : function(){
        console.log(`${this.name}, Welcome to this platform`); //this refers the current environment, this.name is the name variable inside the object
        console.log(this); //here, on printing "this" keyword, entire current environment will get printed
    }
}

user.welcome()
user.name = "Manish"
user.welcome()

console.log(this); //here, this will give an empty object. What "this" keyword will return depends on the compiler engine, in node environment it returns empty object, but in console of the browser it returns several features
//when "this" is printed within a function, then also it give several properties insted of empty object
function chai(){
    let user = "Anish"
    //console.log(this); //give various values and what not
    //console.log(this.user); //here, this does not give the user, hence it only works in object like this
}

chai()

//Arrow Functions : they are just another way of defining functions, and are more widely used

const one = () => { 
    console.log("Hello World");
}
one();

const add = (num1, num2) => {
    return num1 + num2
}

console.log(add(3,4));

const add2 = (num1, num2) => num1 + num2  //similar to above add function, here we do not need to mention return keyword
console.log(add2(3,4));

const add3 = (num1, num2) => (num1 + num2) //when we use parenthesis, we do not need to use return, and for curly braces return keyword is used

console.log(add3(3, 4));

//for returning objects

const objret = () => ({name : "Anish"})
console.log(objret());
