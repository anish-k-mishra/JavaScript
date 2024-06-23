const code = ["JS", "Java", "C++", "Python"]

code.forEach(function (val){ //forEach is an iterator for arrays which contains a callback function within itself. This callback function takes an argument which it gets from iterating the array and executes the callback function for each element. This callback function may have a name or may not
    console.log(`This programming language is ${val}`);
})

//this callback function can also be passed as a reference to a different function, instead of eriting it then and there
function printme(val){
    console.log(val);
}

code.forEach(printme) //passing the reference of a different function as a callback to forEach
 //this callback function also has the access of the index as well as the entire array
code.forEach( (val, index, array)=>{
    console.log(val, index, array);
})

//object within an array
const arrobj = [
    {
        js: "JS",
        cpp: "C++"

    },
    {
        js: "JS",
        cpp: "C++"

    },
    {
        js: "JS",
        cpp: "C++"

    },
    {
        js: "JS",
        cpp: "C++"

    }
]

arrobj.forEach( (val)=> {
    console.log(val.cpp);
})
