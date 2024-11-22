// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// <br/>
// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0


var arr = [5,6,11,12,98, 5];

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) =>  (v === value && count++));
    return count;
}

console.log(getOccurrence(arr, 5));  
console.log(getOccurrence(arr, 25)); 


