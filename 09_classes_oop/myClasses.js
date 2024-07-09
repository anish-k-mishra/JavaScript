// All of this is after ES6 (EcmaScript6)
//now classes exists in JS
class User {
    constructor(username, email, password){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    encryptPass(){
        return `ghdj${this.password}absc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
const user = new User("Anish", "anish@gmail.com", "2GDH");
console.log(user.encryptPass());
console.log(user.changeUsername());

//Actually what is happening behind the scene

function CreateUser = function(){
    this.username = username;
    this.password = password;
    this.email = email;
}
createUser.prototype.encryptPass = function(){
    return `ghdj${this.password}absc`;
}
createUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}