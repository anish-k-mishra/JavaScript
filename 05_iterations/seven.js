const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newN = num.map( (val)=> val+10) //map is also a method which takes a call back function to do certain operations. Filter operation filters the values based on certain condition, but map method performs specified operations and returns the values
console.log(newN);

//We can use this methods multiple times also in a single line

const newNum = num.map( (val)=> val*2).map( (val)=>val+4) //first all the numbers gets multiplied by 2 and is passed to the second map, where they are added by 4 and then finally returned tothe vareable. This is known as chaining of methods
console.log(newNum);

const newNums = num.map( (val)=> val*2).map( (val)=>val+4).filter( (val) => val>16)
console.log(newNums);