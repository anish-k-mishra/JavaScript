//3rd method of initializing getter setter
const User = {
    _email: 'h@hc.com', //in JS any variable starting with _ is terated as a private property, though its access is granted till now everywhere, but in upcoming versions that won't happen
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) //Object.create() is the keyword which helps us creating a new object just by giving the reference of another object
console.log(tea.email);//we don't have any property of email in the class though we can have access of ehat we want like this because of the getters and setters. In JS, whatever we difine in an on=bject, if we define getter and setter taking that property, then the name of that property does not hold that much value, as the variable name is overwritten by the name of getter setter function name. Actually getter setters are not functions but they are treated as variables superimposed over the cactual variables defined (in case of objects)