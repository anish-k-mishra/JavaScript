class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ //extend keyword is used to inherit the properties of a class to another class
    constructor(username, email, password){
        super(username) //takes the value of username and assigns it to the username of User class, and access of that variable is also available here. Nod need to use this keyword
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}

const user = new Teacher("Anish", "anish@gmail.com", "123");

user.addCourse();

const user2 = new User("Chai");
//user2.addCourse() //user2 is made from User class which is not inherited from Teacher, so, it does not have the access of addCourse() method, but vice versa is true.
user2.logMe();
user.logMe() //user is made from Teacher class which is inherited from User class

console.log(user instanceof Teacher); //This gives true, as user in made from Teacher class
console.log(user instanceof User); //This also gives true as Teacher is inherited from User itself
console.log(user2 instanceof Teacher); //False as user2 is made from User class and User class is not inherited from Teacher