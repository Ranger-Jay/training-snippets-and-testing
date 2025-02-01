function bake (degrees) {
    var message;
    if (degrees > 500) {
        message = "The oven is too hot!";
    } else if (degrees < 100) {
        message = "The oven is too cold!";
    } else {
        message = "The oven is at the right temperature!";
    }
    return message; // if return is commented-out, or not included, status prints to console as 'undefined' instead of messages
    // console.log(message);
}

var status1 = bake(350);
var status2 = bake(50);
var status3 = bake(700);

console.log(status1, status2, status3);

console.log(status1);
console.log(status2);
console.log(status3);

