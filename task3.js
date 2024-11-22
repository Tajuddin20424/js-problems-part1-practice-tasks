// ### Task-3: 
// Write a function to count the number of vowels in a string.

function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}
const input = "Whenever I come to my village, I feel immense pleasure because of its peaceful and serene environment. I get to enjoy some fresh and organic vegetables and fruits here. The people in my village are very helpful and they live in harmony with no grudges. They live like one big family who always takes care of each other.";
console.log(`Number of vowels: ${countVowels(input)}`);
