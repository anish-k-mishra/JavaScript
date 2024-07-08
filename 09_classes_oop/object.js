function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power); //this can be ddone to a function also, as at the end of the day a function also references an object only.
console.log(multiplyBy5.prototype);//functions also has prototype referencing just like objects

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){//we can declare own functions within the prototype of a function
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is: ${this.score}`);
}

const user = new createUser("Tea", 20);
const user2 = new createUser("Coffee", 30);
user.increment()
user.printMe() //we donot need to do .prototype.increment().printMe(), that thing is handled by JS
 

