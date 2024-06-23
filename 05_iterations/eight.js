const num = [1, 2, 3]
const mytot = num.reduce(function(acc, currval) {
    console.log(`acc: ${acc}, current value: ${currval}`);
    return acc+currval //this value is stored to accumulator every time
}, 0)//accumulator has the value which we pass to it here. Current value is the value iterated from the array.
console.log(mytot);