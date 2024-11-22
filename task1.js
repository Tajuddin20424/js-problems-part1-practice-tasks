// # js-problems-part1-practice-tasks

// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.


// const celcToFahr = (n){
//     `${n} Celsius is equal to ${(n * 9 / 5) + 32} Fahrenheit: `;
//     const n = 20;
//     console.log(celcToFahr(n));
// }



function celcToFahr(n){
    return((n * 9.0 / 5.0) + 32.2);
}

const n = 50;
console.log(celcToFahr(n));

