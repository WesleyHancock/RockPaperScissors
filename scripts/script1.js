// SELECT STARTGAME BUTTON
let startGame = document.querySelector('.startGame');
// EVENTLISTENER FOR STARTGAME BUTTON
startGame.addEventListener('click', begin);

// select the paragraph to display the results
let result = document.querySelector('.result');

// GRAB ALL BUTTONS USER CAN SELECT
let userOptions = document.querySelectorAll('.userOptions button');

// VARIABLE FOR USERS CHOICE IN THE BUTTONS ARRAY
let option;

// DISPLAY USERS CHOICE BEFORE START OF GAME
let displayClick = document.querySelector('.displayClick');

// DISPLAY USERS CLICK AND SET VALUE OF OPTION TO BE LATER TRANSLATED
userOptions[0].addEventListener('click', () => {
    option = 0;
    displayClick.textContent = `Rock is selected`;
    return;
})

userOptions[1].addEventListener('click', () => {
    option = 1;
    displayClick.textContent = `Paper is selected`;
    return;
})

userOptions[2].addEventListener('click', () => {
    option = 2;
    displayClick.textContent = `Scissors is selected`;
    return;
})

// players score display <p>
let usersTally = document.querySelector('.tally .usersTally');

// players score number
let playerTallyNumber = 0;

// comps score display <p>
let compTally = document.querySelector('.tally .compTally');

// comps score number
let compTallyNumber = 0;

let tally;

// BEGIN GAME FUNCTION
function begin() {

    // DISABLE STARTGAME BUTTON
    startGame.disabled = true;

    displayClick.textContent = '';

    // RESET PLAYER SCORE AND UPDATE THE VALUE
    usersTally.textContent = `Player score:`;

    // RESET COMP SCORE AND UPDATE THE VALUE
    compTally.textContent = `Comp score:`;

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
            return button;
        }

        // RESET FUNCTION
        let reset = function() {
            // RESET THE USERS SELECTION
            option = null;

            // RESET THE RESULTS DISPLAY
            result.textContent = '';
            result.style.backgroundColor = 'white';
            result.style.color = 'white';

            // RESET PLAYER SCORE AND UPDATE THE VALUE
            usersTally.textContent = `Player score: ${playerTallyNumber}`;

            // RESET COMP SCORE AND UPDATE THE VALUE
            compTally.textContent = `Comp score: ${compTallyNumber}`;

            // RESET THE COMPSELECTION
            compTranslate(random());

            // REMOVE THE RESET BUTTON
            let removeReset = document.querySelector('.resetButton');
            removeReset.remove();

            // ENABLE STARTGAME BUTTON
            startGame.disabled = false;

            console.clear();

        };

        let scoreReset = function() {
            playerTallyNumber = 0;
            compTallyNumber = 0;
        }

        let fiveRounds = function() {
            usersTally.append(playerTallyNumber);
            compTally.append(compTallyNumber);

            if (playerTallyNumber >= 5) {
                result.textContent = `Your score is ${playerTallyNumber} and the Computors score is ${compTallyNumber} therefore you WIN it all!`;
                // call score reset
                scoreReset();
            } else if (compTallyNumber >= 5) {
                result.textContent = `Your score is ${playerTallyNumber} and the Computors score is ${compTallyNumber} therefore you LOSE it all!`;
                // call score reset
                scoreReset();
            };

            btn();
        }

        // UNDEFINED FUNCTION
        let undefinedSituation = function() {
            result.textContent = `You have not selected a value.`;
            result.style.backgroundColor = 'red';
            result.style.color = 'white';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            return fiveRounds();
        }

        // DRAW FUNCTION
        let draw = function() {
            result.textContent = `You selected ${usersSelection} and the computor
            selected ${compSelection}, therefore it is a DRAW this round`;
            result.style.backgroundColor = 'black';
            result.style.color = 'white';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            return fiveRounds();
        };

        // WIN FUNCTION
        let win = function() {
            result.textContent = `You selected ${usersSelection} and the computor
            selected ${compSelection}, therefore you WIN this round!`;
            result.style.backgroundColor = 'green';
            result.style.color = 'white';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            // increment usersTally
            playerTallyNumber += 1;
            fiveRounds();
        }

        // LOSE FUNCTION
        let lose = function() {
            result.textContent = `You selected ${usersSelection} and the computor
            selected ${compSelection}, therefore you LOSE this round!`;
            result.style.backgroundColor = 'red';
            result.style.color = 'white';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            // increment compTally
            compTallyNumber += 1;
            return fiveRounds();
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
            tally = 'win';
            return win();
        } else {
            // console.log(`User: ${usersSelection} and Comp: ${compSelection}`);
            // console.log(`LOSE`);
            tally = 'lose';
            return lose();
        }
    }

    outcome();

}