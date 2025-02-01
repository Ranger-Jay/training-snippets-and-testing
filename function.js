// this file is just to test and practice function basics
// var name = "Rover";
// var weight = 23;
function bark(name, weight){
    if (weight > 20) {
        console.log(name + " says Woof! I'm a big dog!");
    } else {
        console.log(name + " says Woof! I'm a small dog!");
    }
}
    // console.log(name + " says Woof! I weigh " + weight + " pounds.");

    bark("Rover", 23);
    bark("Spot", 13);
    bark("Spike", 53);
    bark("Lady", 17);
    bark("Max", "1");
    bark("Juno", 20); // set to 20, which is equal to the function's logic value.  Let's see what happens.
    bark("Scottie", -1); // negative number for 2nd perimeter, let's see what happens
    bark("Dino", 0, 0); // 3rd arguement, let's see what happens

    
    
    
    
    
    
    // function addNumbers(a, b) {