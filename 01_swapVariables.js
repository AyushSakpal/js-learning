console.log("WAP to swap variable values using third variable");
var n1 = 100; // 200
var n2 = 200; // 100
console.log("======== Before Swap ==========");
console.log("n1:", n1, " n2:", n2);

console.log("======== After Swap ==========");
var temp = n1;
n1 = n2;
n2 = temp;
console.log("n1:", n1, " n2:", n2);

var sweet = "Sweet";
var cute = "Cute";
console.log("Before Swap");
console.log("sweet:",sweet,"cute:", cute);
var temp = sweet;
sweet = cute;
cute = temp;

console.log("After Swap");
console.log("sweet:",sweet, "cute",cute);

var cityOne = "Aurangabad";
var cityTwo = "Pune";
var temp = cityTwo;
cityOne = cityTwo;
cityOne = temp;

function swap(oneArg, twoArg){
    console.log("Before Swap");
    var temp = oneAag;
    twoArg = temp;
    console.log("After Swap");
    console.log(oneArg, twoArg);
}
var cityOne = "Aurangabad";
var cityTwo ="Pune";
swap(cityOne, cityTwo);

var sweet = "Sweet";
var cute = "Cute";
swap(sweet, cute);

function multiply(num1, num2){

}


