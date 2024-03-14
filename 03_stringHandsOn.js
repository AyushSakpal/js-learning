function stringHandsOn() {
    const str = " Hey you are doing good, keep it up ";


    console.log("Step 1 : Given String is: ", str);


    console.log("Step 2 : The Length of string is:", str.length);


    const trimmedStr = str.trim();
    console.log("Step 3 : Trimmed string:", trimmedStr, "Length of trimmed string:", trimmedStr.length);


    const extraSpacesCount = str.length - trimmedStr.length;
    console.log("Step 4 : The Total extra spaces removed:", extraSpacesCount);


    console.log("Step 5 : First character after trim is:", trimmedStr[0], "Last character after trim:", trimmedStr[trimmedStr.length - 1]);


    const wordsCount = trimmedStr.split(/\s+/).length;
    console.log("Step 6 : The count of Total number of words available in string after step:", wordsCount);


    const goodIndex = trimmedStr.indexOf("good");
    console.log("Step 7 : Index of word 'good':", goodIndex);


    const subStr = trimmedStr.substring(22);
    console.log("Step 8 : Substring starting from index 22 is:", subStr);


    const endsWithUp = trimmedStr.endsWith("up");
    console.log("Step 9 : String end with word 'up'?", endsWithUp);


    const startsWithHey = trimmedStr.startsWith("Hey");
    console.log("Step 10 : String start with word 'Hey'?", startsWithHey);
}

stringHandsOn();
