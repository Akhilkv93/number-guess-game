let input = document.querySelector('.input');
let submit = document.querySelector('.submit');
let result = document.querySelector('.message');
let guessDisplay = document.querySelector('.guess-count');
let form = document.querySelector('.guess-form');

let guessCount = 0;
let randomNumber = Math.floor(Math.random() * 10); // Random number between 0-9
console.log('Random number:', randomNumber);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let value = Number(input.value.trim());

    if (input.value.trim() === '') return;

    if (isNaN(value)) {
        result.textContent = 'Please enter a valid number!';
        result.style.color = 'red';
        return;
    }

    if (value < 0 || value > 9) {
        result.textContent = 'Guess must be between 0 and 9';
        result.style.color = 'red';
        return;
    }

    guessCount += 1;
    guessDisplay.textContent = guessCount;

    checkGuess(value);
    input.value = '';
});

function checkGuess(value) {
    if (value === randomNumber) {
        result.textContent = 'Your guess is correct!';
        result.style.color = 'green';
    } else if (value < randomNumber) {
        result.textContent = 'Your guess is lower than the number';
        result.style.color = 'orange';
    } else {
        result.textContent = 'Your guess is higher than the number';
        result.style.color = 'orange';
    }
}
