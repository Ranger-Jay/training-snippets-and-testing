// function bark(name, weight){
//     if (weight > 20) {
//         console.log(name + " says Woof! I'm a big dog!");
//     } else {
//         console.log(name + " says Woof! I'm a small dog!");
//     }
// }

//     bark("Rover", 23);
//     bark("Spot", 13);
//     bark("Spike", 53);
//     bark("Lady", 17);
//     bark("Max", "1");


function whatShallIWear (temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    }
    else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
    console.log("Wear a t-shirt");
    }   
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);