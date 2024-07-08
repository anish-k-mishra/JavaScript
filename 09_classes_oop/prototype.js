let name = "Anish     ";
console.log(name.length);
//we want a function to directly trim all unwanted spaces from the string and then report the actual length. Incan be done using .trim().lrngth, but we dont want 2 functions, we want a single function
String.prototype.trueLength = function(){
    console.log(`Actual string: ${this}`);
    console.log(`Actual length of the string is: ${this.trim().length}`);
}
console.log(name.trueLength()); //this functionality was undefined initially
"     Anish Mishra      ".trueLength();

let arr = ["Thor","Spiderman"]
let heroPow = {
    Thor: "Hammer",
    Spiderman: "Sing",

    getSpidyPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.anish = function(){
    console.log("ANISH is present in all objects");
}

heroPow.getSpidyPower()
heroPow.anish() //object does not contain any property or function like this
arr.anish() //this property or function doeas not exists for arrays as well. so they will give error. But if we include this function to object prototype, then it becomes available for objects, arrays, strings, etc, as everythin in JS is an object afterall. Now that we have included this function in the prototype of objects, it will exist in objects, arrays, string etc

//Inheritance
const User = {
    name: "Anish",
    email: "anish@xyz.com"
}
const teacher = {
    makeVdo: true
}
const teachingSupp = {
    isAvailable: false
}
const TASupp = {
    makeAssign: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupp //all the properties of teachingSupp is now available forTASupp (linking both the objects, or, inheriting the properties of teachingSupp to TASupp) (This syntax was used earlier)
}

teacher.__proto__ = User //all the properties of User is now available teacher (linking both the objects, or, inheriting the properties of User to teaching) (This syntax was used earlier)

//modern syntax of inheritance
Object.setPrototypeOf(teachingSupp, teacher) //same as done above, just the difference is with the syntax


