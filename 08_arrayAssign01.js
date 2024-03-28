let array = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];
let first_element = array[0];
let last_element = array[array.length - 1];
console.log("====== step 1 =========");
console.log("First element:", first_element);
console.log("Last element:", last_element);

console.log("============ step 2 =========");
array.unshift('Papaya');
console.log("After adding Papaya:", array.length, array);

console.log("============== step 3==============");
array.splice(array.indexOf('Mango'), 1);
console.log("After removing Mango:", array.length, array);

console.log("=========== step 4 ==========");
array.push('Pineapple');
console.log("After adding Pineapple:", array.length, array);

console.log("================step 5 ===================");
array.splice(4, 0, 'Dragon Fruit');
console.log("After adding Dragon Fruit:", array.length, array);

console.log("================= step 6 ====================");
array[2] = 'Kiwi';
console.log("After replacing Orange with Kiwi:", array.length, array);

console.log("================= step 7 ====================");
console.log("Elements from index 1 to 4:", array.slice(1, 5));

console.log("================== step 8 ====================");
console.log("Last 3 elements:", array.slice(-3));



