// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}


function countPrimes(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            count++;
        }
    }
    return count;
}

// Test array
const array = [3, 9, 7, 6, 19, 29, 53];
console.log("Prime number count in array is:", countPrimes(array));

// Function to count spaces in a string
function spaceCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    return count;
}

// Test strings
const string1 = "Revision is the mother of success";
const string2 = "Java Script is the language of internate world";

console.log("Number of spaces in string 1:", spaceCount(string1));
console.log("Number of spaces in string 2:", spaceCount(string2));

