var drumButtons = document.querySelectorAll('button.drum');
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function () {
        makeSound(this.innerHTML);
        addAnimation(this.innerHTML);
    });
}

document.addEventListener('keydown',function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

function makeSound(buttonValue) {
    switch (buttonValue) {
        case 'w':
            var sound1 = new Audio('sounds/tom-1.mp3');
            sound1.play();
            break;
        case 'a':
            var sound2 = new Audio('sounds/tom-2.mp3');
            sound2.play();
            break;
        case 's':
            var sound3 = new Audio('sounds/tom-3.mp3');
            sound3.play();
            break;
        case 'd':
            var sound4 = new Audio('sounds/tom-4.mp3');
            sound4.play();
            break;
        case 'j':
            var sound5 = new Audio('sounds/snare.mp3');
            sound5.play();
            break;
        case 'k':
            var sound6 = new Audio('sounds/crash.mp3');
            sound6.play();
            break;
        case 'l':
            var sound7 = new Audio('sounds/kick-bass.mp3');
            sound7.play();
            break;
        default:
            console.log('Unfamiliar key value');
    }
}

function addAnimation(textValue){
    document.querySelector('.'+textValue).classList.add('pressed');
    setTimeout(() => {
        document.querySelector('.'+textValue).classList.remove('pressed');
    }, 100);
}