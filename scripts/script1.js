// SELECT STARTGAME BUTTON
let startGame = document.querySelector('.startGame');
// EVENTLISTENER FOR STARTGAME BUTTON
startGame.addEventListener('click', begin);

// select the paragraph to display the results
let result = document.querySelector('.result');

// GRAB ALL BUTTONS USER CAN SELECT
let userOptions = document.querySelectorAll('.userOptions button');

let option;

// DISPLAY USERS CHOICE BEFORE START OF GAME
let displayClick = document.querySelector('.displayClick');



userOptions[0].addEventListener('click', () => {
    option = 0;
    displayClick.textContent = `Rock is selected`;
})

userOptions[1].addEventListener('click', () => {
    option = 1;
    displayClick.textContent = `Paper is selected`;
})

userOptions[2].addEventListener('click', () => {
    option = 2;
    displayClick.textContent = `Scissors is selected`;
})


// BEGIN GAME FUNCTION
function begin() {

    // DISABLE STARTGAME BUTTON
    startGame.disabled = true;

    displayClick.textContent = '';


    // GET USERS CHOICE
    let usersChoice = function() {
        if (option === 0) {
            console.log(`I am returning rock`)
            return 'rock';
        } else if (option === 1) {
            console.log(`I am returning paper`)
            return 'paper';
        } else if (option === 2) {
            console.log(`I am returning scissors`)
            return 'scissors';
        };
    };

    // RANDOMIZER FUNCTION
    let random = function() {
    return Math.floor(Math.random() * 3);
    }

    // INITIALIZE RANDOM NUMER
    let num = random();

    // TRANSLATE RANDOM TO OUTCOME
    let compTranslate = function(r) {
        if (r === 0) {
            console.log(`random is ${r} at rock`);
            return 'rock';
        } else if (r === 1) {
            console.log(`random is ${r} at paper`);
            return 'paper';
        } else if ( r === 2) {
            console.log(`random is ${r} at sciccors`);
            return 'scissors';
        };

    };

    // STORE USERS SELECTION RESULT
    let usersSelection = usersChoice();

    // STORE COMPS SELECTION RESULT
    let compSelection = compTranslate(num);

    console.log(`User: ${usersSelection}, Comp: ${compSelection}`);


    // DETERMINE THE OUTCOME OF THE DUAL
    let outcome = function() {

        // RESET BUTTON FUNCTION
        let btn = function() {
            // CREATE BUTTON
            let button = document.createElement('button');
            button.textContent = 'Reset';
            document.querySelector('.container').appendChild(button);
            button.className = 'resetButton';
            button.addEventListener('click', reset);
        }

        // RESET FUNCTION
        let reset = function() {
            // RESET THE USERS SELECTION
            option = null;


            // RESET THE RESULTS DISPLAY
            result.textContent = '';
            result.style.backgroundColor = 'white';
            result.style.color = 'white';

            // RESET THE COMPSELECTION
            compTranslate(random());

            // REMOVE THE RESET BUTTON
            let remove = document.querySelector('.resetButton');
            remove.remove();

            // ENABLE STARTGAME BUTTON
            startGame.disabled = false;

            console.clear();

        };

        // UNDEFINED FUNCTION
        let undefinedSituation = function() {
            result.textContent = `You have not selected a value.`;
            result.style.backgroundColor = 'red';
            result.style.color = 'white';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            return btn();
        }

        // DRAW FUNCTION
        let draw = function() {
            result.textContent = `You selected ${usersSelection} and the computor
            selected ${compSelection}, therefore it is a DRAW`;
            result.style.backgroundColor = 'black';
            result.style.color = 'white';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            return btn();
        };

        // WIN FUNCTION
        let win = function() {
            result.textContent = `You selected ${usersSelection} and the computor
            selected ${compSelection}, therefore you WIN!`;
            result.style.backgroundColor = 'green';
            result.style.color = 'white';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            return btn();
        }

        // LOSE FUNCTION
        let lose = function() {
            result.textContent = `You selected ${usersSelection} and the computor
            selected ${compSelection}, therefore you LOSE!`;
            result.style.backgroundColor = 'red';
            result.style.color = 'white';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            return btn();
        }

        if (usersSelection === undefined || usersSelection === null) {
            return undefinedSituation();
        } else if ((usersSelection === 'rock' && compSelection === 'rock') || (usersSelection === 'paper' && compSelection === 'paper') || (usersSelection === 'scissors' && compSelection === 'scissors')) {
            // console.log(`User: ${usersSelection} and Comp: ${compSelection}`);
            // console.log(`DRAW`);
            return draw();
        } else if ((usersSelection === 'rock' && compSelection === 'scissors') || (usersSelection === 'paper' && compSelection === 'rock') || (usersSelection === 'scissors' && compSelection === 'paper')) {
            // console.log(`User: ${usersSelection} and Comp: ${compSelection}`);
            // console.log(`WIN`);
            return win();
        } else {
            // console.log(`User: ${usersSelection} and Comp: ${compSelection}`);
            // console.log(`LOSE`);
            return lose();
        }
    }

    outcome();


}