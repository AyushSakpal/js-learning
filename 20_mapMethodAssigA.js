const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];


const newArray1 = arrayNumbers.map(num => num + 10);
console.log("After adding 10 to each element:", newArray1);


const newArray2 = arrayNumbers.map(num => Math.pow(num, 3));
console.log("After cubing each element:", newArray2);


const newArray3 = arrayNumbers.map((num, index) => num + index);
console.log("After adding index value to each element:", newArray3);
