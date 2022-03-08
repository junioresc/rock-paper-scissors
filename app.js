const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = docuemnt.getElementById('user-choice');
const resultDisplay = docuemnt.getElementById('result');
const possibleChoices = docuemnt.querySelectorAll('button');
let userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
}))