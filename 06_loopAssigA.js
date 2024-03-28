// 1. Count the total number of vowels in a string using a for loop
function countVowels(str) {
    let vowelsCount = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCount++;
        }
    }

    console.log("Total number of vowels in string is:", vowelsCount);
}

// Test the countVowels function
const str = "I am very good IT Developer";
countVowels(str);


// 2. Function to get the sum of cube of numbers from 1 to 5
function sumOfCubes(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i * i * i;
    }

    console.log("Sum of cubes from 1 to", n, "is:", sum);
}

// Test the sumOfCubes function
sumOfCubes(5);


// 3.1. Function to log only odd positioned characters in a string (excluding spaces)
function oddPositionedChars(str) {
    console.log("Odd positioned characters in string:", str);

    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 2 !== 0 && str[i] !== ' ') {
            console.log(str[i]);
        }
    }
}

// Test the oddPositionedChars function with string1 and string2
const string1 = "Hard work always pays back";
const string2 = "Soon I will be UI IT Champ";

oddPositionedChars(string1);
oddPositionedChars(string2);



const string1 = "Hard work always pays back";
const string2 = "Soon I will be UI UI Champ";

oddPositionedChars(string1);
oddPositionedChars(string2);
