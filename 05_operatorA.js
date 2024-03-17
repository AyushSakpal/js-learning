// Function to find the square of the length of a word
function squareOfWordLength(word) {
    const length = word.length;
    const square = length * length;
    console.log(`Square of the length of "${word}" is ${square}`);
}
function performStringCalculations() {
    const str = "I am Angular Developer";
    const words = str.split(" ");
    const totalWords = words.length;
    const totalLength = str.length;

    const averageLength = totalLength / totalWords;
    console.log(`Average length per words in "${str}" is: ${averageLength}`);

    const multipliedLength = totalLength * totalWords;
    console.log(`Total string length multiplied by the number of words in  "${str}" is: ${multipliedLength}`);
}

squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

performStringCalculations();
