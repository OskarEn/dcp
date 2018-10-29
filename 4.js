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

fuction findLowest (arr) {
    var lowest;
    if(containsPositive(arr)) {
        //Implementation
    } else {
        console.log("There was no positive number in the integer ");
        lowest = 1;
    }
}