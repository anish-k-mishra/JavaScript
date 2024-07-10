class User {
    constructor(email, password){
        this.emaail = email;
        this.password = password
    }
    //sometimes we dont want to return the password as it is. So we use getters and setters, getters are used to get the value and setteer to set the value. getter and setters are userd for the entities within the class, ad take the same name of the attribute. But within the function we change the variable name as, in constructor also value is being set/get and even the getters and setters would be doing that, soto avoid the race between getters/setters and the constructor, we change the variable name 
    //get password() -> gets the value of password from the constructor, similar is with setter also
    get password(){
        return this._password; 
    }
    set password(value){ //value is the value of password which is automatically passed on to getters and setters by their name
        this._password = value.toUpperCase();
    }
    //getter and setter come at pair, both needs to be declared for a particular attribute
}
const anish = new User("anish@gmail.com", "ishai");
console.log(anish.password);