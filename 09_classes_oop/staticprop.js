class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createID(){ //static keyword prevents the access of the given property to everyone. This property is hidden and is even not accessible to the child classes of this calss
        return `123`;
    }
}

const anish = new User("Anish");
console.log(anish.createID()); //we dont have the access of this property as it is a static property
