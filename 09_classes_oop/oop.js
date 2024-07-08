const user = {
    username: "Anish",
    logincnt: 8,
    signedIn: true,

    getUserDetails : function(){
        //console.log(`Username: ${username}`); //it will not work as we need to pass the context from where we want to print this vale
        console.log(`Username: ${this.username}`); //this refers to the current context
        console.log(this); //we will get the entire current context, i.e., the entirer object
    }
};

user.getUserDetails()

function User(username, logincnt, signedIn){
    this.username = username; //this.username => new variable created within the function, username=>value passed in the function
    this.logincnt = logincnt; 
    this.signedIn = signedIn;
    return this; //returning the current context;
}

const user1 = User("Anish", 12, false);
const user2 = User("Mishra", 13, true);

console.log(user1); //here we dont get expected output, as all the value within the user1 variable is overwritten by another function call when user2 was created. Hence, this is the necessity of "new" keyword, which is a constructor function

const user4 = new User("Mishra", 13, true);
const user3 = new User("Anish", 12, false); 
console.log(user3);
console.log(user4);
//now both user 3 and user 4 are unique, as both are created using constructor new keyword

//while using new keyword:
//1) Initially an empty object is created, known as Instance
//2) All the function call or variable call written by us is executed
//3) Due to new keyword, a constructor functionn is called which passes all the values to the current variable
//4) We get the required output