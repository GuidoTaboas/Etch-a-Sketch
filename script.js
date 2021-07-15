const MAIN_DIV = document.querySelector('.mainDiv');
const COLOR_BUTTONS = document.getElementsByClassName('colorButton');
const COLOR_PICKER = document.querySelector('#colorPicker');
const ERASE_BUTTON = document.querySelector('.eraseButton');
const TRANSPARENT_BUTTON = document.querySelector('#transparentButton')
const SLIDER = document.querySelector('.slider')

let color = 'black';
let sideQuantity = 25; /*Number(prompt('Choose DIV size'))*/


function createMainDiv() {
    let totalQuantity = (sideQuantity * sideQuantity);
    console.log(totalQuantity, sideQuantity)
    MAIN_DIV.style.gridTemplateColumns = `repeat(${sideQuantity}, 1fr)`;
    MAIN_DIV.style.gridTemplateRows = `repeat(${sideQuantity}, 1fr)`;
    for (let i = 0; i < totalQuantity; i++) {
        let square = document.createElement('div');
        square.id = 'innerDiv';
        square.style.backgroundColor = 'transparent'
        MAIN_DIV.appendChild(square);
        
    }
}

function chooseColor(color) {
    const INNER_DIV = document.querySelectorAll('#innerDiv');
    for (let i = 0; i < INNER_DIV.length; i++) {
        INNER_DIV[i].addEventListener('mouseover', function(e) {
            INNER_DIV[i].style.backgroundColor = color;
    })
    }
}

function wholeColor(color) {
    const INNER_DIV = document.querySelectorAll('#innerDiv')
    for (let i = 0; i < INNER_DIV.length; i++) {
        INNER_DIV[i].style.backgroundColor = 'transparent';
    }
}

function eraseColor() {
    const INNER_DIV = document.querySelectorAll('#innerDiv')
    for (let i = 0; i < INNER_DIV.length; i++) {
        INNER_DIV[i].style.backgroundColor = 'white';
    }
}

for (let i = 0; i < COLOR_BUTTONS.length; i++) {
    COLOR_BUTTONS[i].addEventListener('click', function(e) {  
        chooseColor(e.target.id);
    })
}


ERASE_BUTTON.addEventListener('click', eraseColor)
TRANSPARENT_BUTTON.addEventListener('click', wholeColor)

COLOR_PICKER.addEventListener('change', function(e) {
    chooseColor(e.target.value)
})

SLIDER.addEventListener('mouseup', function(e) {
    sideQuantity = e.target.value
    MAIN_DIV.innerHTML = ''
    createMainDiv()
    chooseColor('black')
})

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
  }

function closeNav() {
document.getElementById("sideNav").style.width = "0";
} 


if (sideQuantity) {
    while (MAIN_DIV.firstChild) {
        MAIN_DIV.remove(MAIN_DIV.lastChild)
    }
    createMainDiv()
    chooseColor(color)
}