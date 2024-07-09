function setUsername(username){
    //complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    setUsername(username) //here actually no call goes to the function declared (actually call goes, but as soon as the function gets over its execution context is removed from the call stack and hence all the variables and data present in that execution context is lost)

    //to solve the above problem we need to hold the data of the execution context when the function is called. it is done by call keyword and by passing the current context to the function
    setUsername.call(this, username); //passing the current context asany changes made during the function call will be reflected in the current context and not in the exeution context of the function which will get deleted once the call is over
    this.email = email;
    this.password = password
}

const user = new createUser("Anish", "anish@fb.com", 123);
console.log(user);