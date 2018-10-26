//DCP Problem 1 (26.10.18)
// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

const testNumbers = [10, 15, 3, 7];
const k = 17; 

//A two-step solution would be to find the difference between the number and k and then see if the compliment exists in testNumbers

// //see if any of the differences cancel out meaning that k can be achieved (or not)
// function canAddtoK (differenceArray) {

// }

console.log("Result of test numbers: ", canAddtoK(testNumbers, k));

function canAddtoK (set) {
    var complimentFound = false;
    var complimentNumber = testNumbers.map(diff);

    for (var i = 0; i < set.length; i++) {

        if(set.includes(complimentNumber[i])) {
            complimentFound = true;
            break;
        } 
    }
    return(complimentFound);
}

function diff (value) {
    return k - value;
}

