var tri = "*";
var num = 5;

function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
        console.log("*".repeat(i));
    }
}

printTriangle(num);


//simple printing of a triangle, with a repeat function that goes up, until it reaches the num variable and parameter.
//This proves that params and global variables can be the same. (but it is not good!)

// outputs an asterisk triangle:

// *
// **
// ***
// ****
// *****