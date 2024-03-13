
console.log(`========== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);

console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log('================== Search()=====================');
var greet = "Good Morning";
var greet = greet.search("Morning");


console.log('================= slice()=================');
var greet ="Good Morning";
var result = greet.slice(3, 10);
console.log('Slice is ${result}');

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

console.log(`========== split() ==================`);
var totalWord = "I am Happy Buddy";
var resultValue = totalWord.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

var totalWord = "I am learning JS the language of internet"
var resultValue = totalWord.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

function lengthOfWords(arg){
    var splitWords = arg.split(" ");
    var len = splitWords.length;
    return len;
}
var output = lengthOfWords("I am happy Buddy");
console.log(`Length of words : ${output}`);
var output = lengthOfWords("I am learning JS the language of Internet");

// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);