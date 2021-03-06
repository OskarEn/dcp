// DCP Problem 4 (29.10.18)
// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

var test1 = [3, 4, -1, 1];
var test2 = [1, 2, 0];
var test3 = [-4, 3, 5, 3, 6];
var test4 = [];

console.log(findLowest(test1));
console.log(findLowest(test2));
console.log(findLowest(test3));
console.log(findLowest(test4));

function findLowest (arr) {
    
    var lowest;

    var positiveArray = arr.filter(ints => {
        return ints > 0;
    });;

    if (!Array.isArray(positiveArray)) {
        console.log("There was no positive number in the integer ");
        lowest = 1;
    } else {
        lowest = arrayChecker(positiveArray);
    }
    return lowest;

    function arrayChecker (postiveSet) {
        var firstGap;
        var found = false;
        var starter = 1;

        while(!found) {
            if (postiveSet.includes(starter)) {
                starter ++;
            } else {
                firstGap = starter;
                found = true;
            }
        }
        return firstGap;
    }
}