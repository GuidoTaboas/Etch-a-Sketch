const MAIN_DIV = document.querySelector('.mainDiv');
const COLOR_BUTTONS = document.getElementsByClassName('colorButton');
const COLOR_PICKER = document.querySelector('#colorPicker');
const ERASE_BUTTON = document.querySelector('.eraseButton');
const TRANSPARENT_BUTTON = document.querySelector('#transparentButton')
const RAINBOW_BUTTON = document.querySelector('#rainbow')
const SLIDER = document.querySelector('.slider')
const defaultSliderValue = 25
let mouseDown = false

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

//Choose color to paint
function chooseColor(color) {
    const INNER_DIV = document.querySelectorAll('#innerDiv');
    for (let i = 0; i < INNER_DIV.length; i++) {
        INNER_DIV[i].addEventListener('mouseover', function(e) {
            INNER_DIV[i].style.backgroundColor = color;
    })
    }
}

//Rainbow Sequence

function rainbow() {
    const INNER_DIV = document.querySelectorAll('#innerDiv')
    const rainbowArray =[ 
        'rgb(255, 0, 0)',
	 	'rgb(255, 165, 0)',
		'rgb(255, 255, 0)',
	 	'rgb(0, 128, 0)',
	 	'rgb(0, 0, 255)',
	 	'rgb(75, 0, 130)',
	 	'rgb(238, 130, 238)'
    ]
    for (let i = 0; i < INNER_DIV.length; i++) {
        INNER_DIV[i].addEventListener('mouseover', function(e) {
            let color = rainbowArray[Math.floor(Math.random() * rainbowArray.length)]
            INNER_DIV[i].style.backgroundColor = color;
        })
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//Set whole background to a color
function wholeColor(color) {
    const INNER_DIV = document.querySelectorAll('#innerDiv')
    for (let i = 0; i < INNER_DIV.length; i++) {
        INNER_DIV[i].style.backgroundColor = 'transparent';
    }
}

//Set backgroung to white
function eraseColor() {
    const INNER_DIV = document.querySelectorAll('#innerDiv')
    for (let i = 0; i < INNER_DIV.length; i++) {
        INNER_DIV[i].style.backgroundColor = 'white';
    };
};

//Slider event listener
SLIDER.addEventListener('mouseup', function(e) {
    sideQuantity = e.target.value
    MAIN_DIV.innerHTML = ''
    createMainDiv();
    chooseColor('black');
});

function resetSlider() {
    SLIDER.value = defaultSliderValue
}

//Open and close lateral nav bar
function openNav() {
    document.getElementById('openButton').style.visibility = 'hidden'
    document.getElementById("sideNav").style.width = "200px";
    
  };

async function closeNav() {
document.getElementById("sideNav").style.width = "0";
await sleep(300)
document.getElementById('openButton').style.visibility = 'visible'
};

/*document.addEventListener('mousedown', function () {
    mouseDown = true;
});

document.addEventListener('mouseup', function () {
    mouseDown = false;
});


function paint (color) {
    const INNER_DIV = document.querySelectorAll('#innerDiv');
    INNER_DIV.forEach(INNER_DIV1 => INNER_DIV1.addEventListener('mouseenter', function(e){
        if (mouseDown) {
            e.target.style.backgroundColor = color;
        }
    }));
    INNER_DIV.forEach(INNER_DIV1 => INNER_DIV1.addEventListener('mousedown', function(e){
        e.target.style.backgroundColor = color;
    }))
}*/

if (sideQuantity) {
    while (MAIN_DIV.firstChild) {
        MAIN_DIV.remove(MAIN_DIV.lastChild)
    }
    createMainDiv()
    chooseColor(color)
}

ERASE_BUTTON.addEventListener('click', eraseColor)
TRANSPARENT_BUTTON.addEventListener('click', wholeColor)
RAINBOW_BUTTON.addEventListener('click', rainbow)

COLOR_PICKER.addEventListener('change', function(e) {
    chooseColor(e.target.value)
})

for (let i = 0; i < COLOR_BUTTONS.length; i++) {
    COLOR_BUTTONS[i].addEventListener('click', function(e) {  
        chooseColor(e.target.id);
    })
}