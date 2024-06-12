let marvel = ["IronMan", "Thor", "Loki"]
let dc = ["BatMan", "SuperMan", "Joker"]

marvel.push(dc) //pushes entire dc array as a single element at the end of marvel
console.log(marvel);

marvel.pop() 
let all = marvel.concat(dc) //combines the elements of both the arrays and returns a new array
console.log(all);

const all_new = [...marvel, ...dc] //Spread Operator -> does the same like concat. this is more preffered, as 2 or even more than 2 arrays can be combined togrther by this method
console.log(all_new);

let arr = [1, 2, 3, [4, 5, [6, 7 ,[8]]], [9, [10, [11, [12]]]], 13] //this array is not at all usable, it it contains multiple layer of elements

let usable_arr = arr.flat(Infinity) //this make the above array by removing multipe layers into a single array which contains all the elements upto the specified layer. we are using layer specificcation as infinity to handle all the layers
console.log(usable_arr);

console.log(Array.isArray("Anish")); //checks weather the given element is an araray or not
console.log(Array.from("Anish")); //creates an array from the given input, in this case it creates ["A", "n", "i", "s", "h"]


let a = 100
let b = 200
let c = 300
console.log(Array.of(a, b, c)); //creates an array of elements a, b, c and returns the array

