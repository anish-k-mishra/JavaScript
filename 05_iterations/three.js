//for of loop
//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) { //easy way to iterate over array. No need of any condition and all
    console.log(i);
}

const greeting = "Hello World"
for (const greet of greeting) {
    console.log(greet);
}

//Maps in JS
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN","India") //as India is already set, so, it won't get added again to the map

console.log(map);
//iterating the map
for (const key of map) {
    console.log(key); //this prints all the key value pair in individual pairs
}

for (const [key, value] of map) {
    console.log(key, ":-", value);  //in this way the key value pair is destructured
}

const myObj = {
    game1 : "NFS",
    game2 : "Call Of Duty",
    game3 : "PlayersUnknown Battleground"
}
for (const [key, value] of myObj) {
    //console.log(key, ":-", value); //this will not work as objects are not iteratable.
}



