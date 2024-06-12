// Dates    
let myDate = new Date()
console.log(myDate); //gives date in complex form
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log(typeof myDate); //gives object

let createdDate = new Date(2024, 0, 23)
console.log(createdDate.toDateString()); // returns 23 jan 2024. Hence, in JS months start from 0, not from 1

let createdDate2 = new Date(2024, 0, 23, 5, 45) //eventually after date time can also be passed like as shown

let createdDate3 = new Date("2024-01-23")//another format of declaring date-> yyyy-mm-dd, in this case the month starts from 1
let createdDate4 = new Date("01-24-2024") //mm-dd-yyyy

let timeStamp = Date.now() //gives the millisec value from 1 jan 1970 till now

console.log(timeStamp);
console.log(createdDate.getTime()); //millisec val from 1 ja  1970 till creation of this variable
