const descripter = Object.getOwnPropertyDescriptor(Math, "PI") //in this way we find out different properties of an element in an object which are hidden in prototype

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', { //in this way the properties of the attributes of objects are changed
    //writable: false, //if false, this attribute cannot be changed 
    enumerable: true, //if false, we cannot apply loop to this attribute of the object
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}