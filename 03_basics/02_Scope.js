// ***********We knoe every thing about global and local scope of variables

console.log(addone(5)) // calling the 1st function before initialization. This works

function addone(num){ //initialization of 1st function
    return num+1
}

// console.log(addtwo(5)); //calling the 2nd function before initialization. This does not work as the 2nd function is stored in a avriable, i.e, while its initialization we are storing it in a different variable, hence it can not be accessed before the variable has been declared. Hence, weather a function is available before its initialization or not depends upon how we are initializing the variable
const addTwo = function(num){ //function initialization in a different form
    return num+2
}

console.log(addTwo(5)); // this works, as it is called after the initialization of the function variable
 
//this refers to HOISTING several times

