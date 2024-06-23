const coding = ["C++", "JavaScript", "Python", "Ruby"]

const value = coding.forEach( (item)=> {
    console.log(item);
    return item;
})

console.log(value); //this will give undefined, hence it is clear the forEach does not return anything, even if we try to return any value manually

//but it is sometimes necessary to return values, instead of just printing it. In that case we use filter() operator

const nums = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]
const numsNew = nums.filter( (val)=> val>5)//filter method also take a callback function but this time it returns the values which satisfy as following condition

const n = nums.filter( (val)=>{
    return val<6
})

console.log(numsNew);
console.log(n);