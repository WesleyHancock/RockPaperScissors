// collect the users choice
let onClick = document.querySelector('.startGame');

// event listener for start game button
// onClick.addEventListener('click', startGame);

// get all outcomes user can select
let userOptions = document.querySelectorAll('.userOptions input');

// get user choice
let usersChoice = function() {
    if (userOptions[0].checked) {
        return 'rock';
    } else if (userOptions[1].checked) {
        return 'paper';
    } else if (userOptions[2]) {
        return 'scissors';
    };
};

