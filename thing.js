function clunk(times) {
    var num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}

function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
    display("clank");
} else if (size == 1) {
    display("thunk");
} else {
    while (size > 1) {
        facky = facky * size;
        size = size - 1;
    }
    clunk(facky);
    }
}

function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
thingamajig(6);
console.log(clunkCounter);


//outputs:  when thingamagic is 0: clank (1)
//outputs:  when thingamagic is 1: thunk (1)
//outputs:  when thingamagic is 2: clunk (2)
//outputs:  when thingamagic is 3: clunk (6)
//outputs:  when thingamagic is 4: clunk (24)
//outputs:  when thingamagic is 5: clunk (120)
//outputs:  when thingamagic is 0: clunk (720)
