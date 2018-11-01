// DCP Problem 7 (1.11.18)
// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.


// Range of number values in the message is between 1 and 26.
// Encoding is either 1 or 2 char
var message;
var letterCombinations;

const alpha = {
    1 : A,
    2 : B,
    3 : C,
    4 : D,
    5 : E,
    6 : F,
    7 : G,
    8 : H,
    9 : I,
    10 : J,
    11 : K,
    12 : L,
    13 : M,
    14 : N,
    15 : O,
    16 : P,
    17 : Q,
    18 : R,
    19 : S,
    20 : T,
    21 : U,
    22 : V,
    23 : W,
    24 : X,
    25 : Y,
    26 : Z

}

//Alternatives:
//Letter by letter
//.length (add then combination maths, )

//TODO: Do one for small message and see if I can abstract out


//hacky function to get map of letters
// function incrementer (){
//     var counter = 1;
//     while(counter < 27) {
//         console.log(counter, ':', String.fromCharCode(counter + 64) );
//         counter ++;
//     }
// }
// incrementer();