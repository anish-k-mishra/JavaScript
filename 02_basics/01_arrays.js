let arr = [1, 2, 3, 4, 5] //declaration of array in JS. An array in JS can contain multiple datatypes also
//in JS arrays are resizable unlike c++
//In JS copy operations of array make the shallow copy, i.e., copy whose referances share same address
 const arr2 = new Array("hero", "shaktimaan", "batman") //another way of declaring array

 console.log(arr);
 arr.push(6) //adds given element at the end of the array
 console.log(arr);
 arr.pop() //removes the last element from the array
 console.log(arr);

 arr.unshift(9) //adds the given element at the start of the array, and shifts all the elements of the array towards right
 console.log(arr);

 arr.shift() //removes the first element of the array and shifts all the remaining elements left
 console.log(arr);

 console.log(arr.includes(9)); //checks if given element is present in the array or not

 console.log(arr.indexOf(9)); //returns the index of the given element if present in the array, if not present then returns -1


 let newArr = arr.join() //converts the array to string

 console.log(arr);
 console.log(newArr);

 const arr3 = arr.slice(1,3); //makes a subarray form original array from first index to last index(excludes the last index), this method does not alter the original array
 console.log(arr);

 const arr4 = arr.splice(1,3) //makes a subarray from original array just like slice operation ,but this time it includes the last index. This method also deletes the subarray from the original array
 console.log(arr); 
 

