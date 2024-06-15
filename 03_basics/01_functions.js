//declaration of a function
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}
//sayMyName  //function reference
sayMyName() //function call

//adding two numbers
function add(num1, num2){ //in JS we dont need to define the datatype of parameters passed, JS takes care of it
    console.log(num1 + num2);
}

add(5, 5) //will print 5+5 = 10, prints it as number
add(5, "5") //will treat both as strings and concatenate and print 55 (as a string). This is because we havent checked the datatype of the arguments passed and are simply adding both the arguments.

let result = add(5, 5)
//console.log("Result:" , result); //will not give any result, as in the function we are just printing the output, and are not returning anything, hence result variable will not store anything

function add2(num1, num2){
    return num1 + num2 //now this function returns a value instead of printing it, and hence can be stored in a variable
}
result = add2(5, 5)
console.log("Result: ", result);

//passing multiple values to a function
function calcCartPrice(...num){//using rest operator to enter multiple values to the same function at the same time. while returning we get all the elements in an array. Both rest and spread operators look alike "...", but they differ by their use cases
    return num
}
console.log(calcCartPrice(300)); //will give [300]
console.log(calcCartPrice(500, 600, 1300)); // will give all the values passed in an array


//passing object to a function
const obj = {
    name: "Anish",
    price: 199
}
function handleObj(anyObj){
    console.log(`UserName is ${anyObj.name}, and the price is ${anyObj.price}`); //if the property does not exist within the object, then in that case it will give undefined, hence before accessing the properties of objects, we need to make sure weather it is actually present in the object passed or not
}

handleObj(obj) //passing object to a function
handleObj({
    name:"Anish",
    price: 199
}) //passing object to a function (another way)



//passing array to function
const arr = [100, 200, 300, 400]

function getFirstVal(newArr){
    return newArr[0]
}

console.log(getFirstVal(arr)) //passing array
console.log(getFirstVal([100, 200, 300, 400])) //passing array (another way)