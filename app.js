const progress = document.getElementById('progress');
const progressProcess = document.getElementById('progress__process');
const input = document.getElementById('value');
const animatedInput = document.getElementById('animated');
const hideInput = document.getElementById('hide');

const number = /[0-9]/;

let minValue = 0;
let maxValue = 100;

input.min = minValue;
input.max = maxValue;

progressProcess.style.background = `conic-gradient(var(--blue) calc(${minValue}* 1%), var(--light-blue) 0)`;



input.addEventListener('input', (e) => {
    updateValue(input, progressProcess);
} );

input.addEventListener('keypress', (e) => {
    deleteLetter(e);
})

animatedInput.addEventListener('change', (e) => {
    animated(progress);
    
});

hideInput.addEventListener('change', (e) => {
    hide(progress);
    
});


function animated(container) {
    container.classList.toggle('animated');
}

function hide(container) {
    container.classList.toggle('hide');
}


function updateValue(input, container) {   
    let inputValue = input.value;
    if (inputValue == '') inputValue = 0;
    container.style.background = `conic-gradient(var(--blue) calc(${inputValue}* 1%), var(--light-blue) 0)`;
    checkLength(input);
}

function deleteLetter(value) {
    if (!number.test(value.key)) {
        value.preventDefault();
    }
}

function checkLength(input) {   
    let inputValue = input.value;
    if (inputValue.length >= 3 && inputValue > 100) {
        inputValue = 100;
        input.value = inputValue;
        input.setAttribute('value', input.value);
    } 
}