

var marks =80;
if (marks<35) {
    console.log(`Failed. Marks: ${marks}`);
} else {
    if (marks>=35  && marks < 55) {
        console.log(`Congratulation. Marks${marks} Grade: C`);
    } else {
       if (marks>=55 && marks<75) {
        console.log(`Congratulation. Marks${marks} Grade: B`);
       } else {
          if (marks>=75 && marks<100) {
            console.log(`Congratulation. Marks${marks} Grade: A`);
          } else {
            console.log(`Invalid Marks percentage`);
          }
       } 
    }
}