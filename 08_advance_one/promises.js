const promise1 = new Promise(function(resolve, reject){ //a promise either gets resolved, or gets rejected
    //Do an Async Task
    //DB calls, cryptography, network related
    setTimeout(function(){
        console.log("Async task done!");
        resolve();
    }, 1000) 

})

//resolve is connected to .then()
promise1.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(("Async Task two!"));
        resolve();
    }, 1000)
}).then(function(){ //if promise is not stored in a variable
    console.log("Async two resolved!");
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "anish-k-mishra", email: "anish@gmail.com"}); //resolve passes data to .then()
    },1000)
})

promise3.then(function(user){ // .then() takes data from resolve and hence we can add parameter to the call back function to access the data sent by resolve()
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "anish-k-mishra", email: "anish@gmial.com"});
        }
        else{
            reject("ERROR: Something went wrong!") //reject is used in case resolve does not run
        }
    }, 1000)
})

promise4.then(function(user){
    console.log(user);
    return user.username; //this does not gets returned to any variable, if we store this to a new variable. This gets returned to next .then() when we call it through chaining
}).then(function(username){
    //the earlier called username is passes as an attribute to this then() function
    console.log(username);
}).catch(function(error){
    //reject in the promise is related to .catch(), i.e. if the call gets rehject, catch executes
    console.log(error);
}).finally(function(){
    //either the promise gets resolved, or gets rejected, this function ,i.e., .finally() give the update that either of both has successfully happened, and nothing is in queue
    console.log("Either the promise is resolved, or is rejected!");
}) //above entire .then(..).then(..).catch(..) is known as chaining


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "1233"});
        }
        else{
            reject("ERROR: Something went wrong with javascript!") //reject is used in case resolve does not run
        }
    }, 1000)
})

//another way of accepting the promise
// async-await : similar to .then() , .catch(), but it waits for the task to completely and only then proceeds. .catch() can not be handled gracefull here.
// async function consumePromise5(){
//     const response = await promise5;
//     console.log(response);
// }//if an error occurs then this will not work as we haven't handled error gracefully, otherwise this works fine

async function consumePromise5(){
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}// in this case the error is also handled gracefully. This is another way of accepting promises without using .then(), .catch()

consumePromise5();

//handling api calls using all the above stuff
//async-await
async function getAllUsers(){
    try {
        const response = await fetch("https://api.github.com/users/anish-k-mishra"); //getting all the data from url (takes time, so await)
        const data = await response.json() //all the data fetched is in string, so converting it to JSON format (takes time, so await);
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
//getAllUsers()

//.then(), .catch()

//NOTE: fetch() is also a promise.
fetch("https://api.github.com/users/anish-k-mishra")
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

