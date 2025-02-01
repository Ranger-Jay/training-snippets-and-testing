function speak(kind) {
    var defaultSound = "";
    if (kind == 'dog') {
        alert('woof!'); 

        } else if (kind == 'cat') {
            alert('meow!');
        } else {
            alert(`enter cat or dog! I don't know how to speak that!`);
            // defaultSound = 'Unknown sound';
        }
    }
    var pet = prompt('Enter a type of pet: ');
    speak(pet);
