// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming


function longest(str){
    str = str.split(" ");
    return str.sort((a, b) => b.length - a.length)[0];
}
console.log("I am learning Programming to become a programmer." + "Where students learn programming.");