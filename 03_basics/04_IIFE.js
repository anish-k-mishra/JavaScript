// Immediately Invoked Function Expression (IIFE)

//Sometimes some functions need to be called immediately after the declaration of them, and these functions are several times polluted by the presence of a global scope while calling them immediately manually. To solve this problem we use IIFE.

// IIFE -> function which calls immediately after the declaration and is free from pollution from global variables

//starting parenthesis returns the value present inside, later parenthesis runs the function immediately after declaration
(function iife(){ //named IIFE
    console.log(`DB CONNECTED`);
})(); //in case of IIFE, we need to place a semicolon after calling it, otherwise, the compiler will not stop the execution of the function, so int cases of IIFE, semicolon is mandatory


//IIFE via arrow function
( () => { //un-named IIFE
    console.log(`DB CONNECTED AGAIN`);
})();