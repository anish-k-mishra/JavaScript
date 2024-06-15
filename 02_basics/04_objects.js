//const appuser = new Object()  //singleton object
const userapp = {}  //non-singleton object

userapp.id = "abc123"
userapp.name = "Anish"
userapp.isLoggedIn = false

console.log(userapp);

//nested objects
const us = {
    name:"Manish",
    fullname : {
        userfullname: {
            first: "Manish",
            middle: "Kumar"
        },
        last: "Sharma"
    }
}

console.log(us.fullname.userfullname.first); //accessing the nested objects

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c", 4: "d"} 
//we want to combine both the above objects
let obj3 = {obj1, obj2} //in this case, both objects come as an individual entity into a new object
//but we want all the properties of the object to come under single object
console.log(obj3); //gives {obj1: {...}, obj2: {...}}  

let obj4 = Object.assign(obj1, obj2) //combines all the elements of onj1 and obj2 and puts in obj4
let obj5 = Object.assign({}, obj1, obj2) //gives the same result as above, but this time its sure that we get all the properties in an object only. This way is more preferrable. {} acts as target and rest objects passed acts as source

console.log(obj4);
console.log(obj5);

let obj6 = {...obj1, ...obj2} //spread operator. Does the same thing of combining two or more objects
console.log(obj6);


console.log(Object.keys(userapp)) //returns all the keys present in the object in form of string in array

console.log(Object.values(userapp)); //gives all the values present inn the array in an array

console.log(Object.entries(userapp)); //returns all the key value pair within an array of arrays

console.log(userapp.hasOwnProperty('isLoggedIn')); //tells weather the object contains the given property or not

const course = {
    courseName : "JavaScript in details",
    courseInstructor : "Anish Mishra",
    coursePrice : "Rs 1"
}

//de-Structuring the object
const {courseInstructor : Instructor} = course // in this way we can access the courseInstructor property of the object course just by writing Instructor instead of course.courseInstructor
console.log(Instructor);

//json api format
// {
//     name: "ANISH",  
//     age : "23",
//     class: "B.Tech"
// }
 
//json api format
[
    {},
    {},
    {}
]