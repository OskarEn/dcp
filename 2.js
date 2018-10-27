// DCP Problem 2 (27.10.18)
// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array 
//is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
//If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

var test1 = [1, 2, 3, 4, 5];
var test2 = [3, 2, 1];

console.log(initialSolution(test1));
console.log(initialSolution(test2));

function initialSolution (firstArray) {
    var arrProduct = summerFunc(firstArray);

    function summerFunc(value) {
        var product = 1; //to prevent the first value being * by 0
        for(var i = 0; i < value.length; i++) {
            product = product * value[i];
        }
        return product
    }

    //var result = arrProduct.map(x => arrProduct/x);
    var solution = Array.from(firstArray, x => arrProduct/x);
    return solution;
}

