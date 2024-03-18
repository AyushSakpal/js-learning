

const voteEligibility = age => {
    if (age <= 0 || age > 130 || age === null) {
        console.log("Invalid data");
    } else if (age < 18) {
        console.log('Not eligible for voting');
    }else{
        console.log('Eligible for voting');
    }
};

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
