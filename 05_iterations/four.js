//forin loop

const obj = {
    js: "Javacript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for (const key in obj) {
    console.log(key); //objects cannot be iterated using forof loop, hence we iterate it using forin loop. This statements prints all the keys present in the object
}
//for accessing both keys and values from the object

for (const key in obj) {
    console.log(`The value of ${key} is ${obj[key]}`); //this is print key along with its value
}

//use of forin loop for arrays
const arr = [101, 102, 103, 104, 105]
for (const key in arr) {
    console.log(key); //this gives all the indexes of the array. The major difference  in forof and forin loop is that forin loop gives the keys by default, while, forof loop gives the values within the keys
    console.log(arr[key]); //to print the values within the keys
}

//Maps cannot be iterated using forin loop

