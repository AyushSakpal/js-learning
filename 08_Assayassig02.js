const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];


console.log("Total elements in arrayNumbers:", arrayNumbers.length);


console.log("First element:", arrayNumbers[0]);
console.log("Last element:", arrayNumbers[arrayNumbers.length - 1]);


console.log("Third last element:", arrayNumbers[arrayNumbers.length - 3]);


console.log("Even numbers:");
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 === 0) {
        console.log(arrayNumbers[i]);
    }
}


console.log("Odd numbers:");
for (let num of arrayNumbers) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}


let evenPositionedSum = 0;
for (let i = 1; i < arrayNumbers.length; i += 2) {
    evenPositionedSum += arrayNumbers[i];
}
console.log("Sum of even positioned elements:", evenPositionedSum);


let oddPositionedSum = 0;
for (let i = 0; i < arrayNumbers.length; i += 2) {
    oddPositionedSum += arrayNumbers[i];
}
console.log("Sum of odd positioned elements:", oddPositionedSum);


let sum = arrayNumbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all elements:", sum);


console.log("Numbers which are multiple of 5:", arrayNumbers.filter(num => num % 5 === 0));


console.log("Is number 115 available in array?", arrayNumbers.includes(115));


console.log("Is number 23 available in array?", arrayNumbers.includes(23));


arrayNumbers.splice(3, 0, 55, 66);
console.log("After inserting 55 and 66 at index 3:", arrayNumbers);


arrayNumbers.splice(4, 3);
console.log("After deleting 3 elements starting from index 4:", arrayNumbers);
