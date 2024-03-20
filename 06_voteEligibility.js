function voteEligible(age) {
    if (age <= 0 || age > 130 || isNaN(age)) {
        console.log('Invalid input', age);
    } else if (age < 18) {
        console.log('not eligible for. vote:', age);
    } else {
        console.log('eligible for voting', age);
    }
}


voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);

