
const greet = () => {
    console.log("Good Morning, Today is Monday");
};


const multiply = (a, b, c = 1) => {
    const result = a * b * c;
    console.log(`Multiplication of ${a},${b},${c} is:: ${result}`);
};


const add = (a, b, c, d, e) => {
    const result = a + b + c + d + e;
    return result;
};


greet();
console.log("=================================================");

multiply(5, 5, 2);
multiply(10, 4);
console.log("=================================================");

const sum = add(100, 100, 200, 349, 756);
console.log(`Addition of 100, 100, 200, 349, 756, is:: ${sum}`);


const stringSum = add("I am", " learning", "ES6", "features", " in depth");
console.log(`Addition of I am, learning, ES6, features, in depth, is: ${stringSum}`);

