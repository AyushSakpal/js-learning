console.log("======================= Step 1 =========================");
const greaterNumber = (num1, num2) => num1 > num2 ? num1 : num2;


const isEvenOrOddNum = num => num % 2 === 0 ? true : false;


const wordLength = word => word.length % 2 === 0 ? "EVEN" : "ODD";



console.log("Greatest number:", greaterNumber(10, -10));
console.log("Greatest number:", greaterNumber(800, 899));

console.log("=========================== Step 2 ==============================");

console.log("Given number 29 is", isEvenOrOddNum(29) ? "Even" : "ODD");
console.log("Given number 44 is", isEvenOrOddNum(44) ? "EVEN" : "Odd");
console.log("Given number 0 is", isEvenOrOddNum(0) ? "EVEN" : "Odd");
console.log("Given number 101 is", isEvenOrOddNum(101) ? "Even" : "ODD");

console.log("=========================== Step 3 ==============================");

console.log("Given word JavaScript is with", wordLength("JavaScript"));
console.log("Given word developer is with", wordLength("developer"));
console.log("Given word'Google is with", wordLength("Google"));
