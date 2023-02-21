// what do we want to do???

// - display round Number
let round;
let userChoice = '';
let userPoints = 0;
let computerChoice = '';
let computerPoints = 0;
let totalPoints = userPoints + computerPoints

do {
    document.querySelector('#roundNum').innerHTML = 1;
    generateUser();
    displayResult();
} while (round >= 10 && (totalPoints == 10));

// document.querySelector('button').setAttribute("disabled");

// document.querySelector('#resetGame').addEventListener('click', reset);

// function reset() {
//     document.querySelector('button').removeAttribute("disabled");
    
// }

    // document.querySelector('#gameOver').
        
    function displayResult() {
        if (userPoints > computerPoints) {
            document.querySelector('#winner').innerText = "YOU ARE THE WINNER";
        } else if (userPoints < computerPoints) {
            document.querySelector('#winner').innerText = "THE COMPUTER WON THE GAME";
        } else {
            document.querySelector('#winner').innerText = "YOU HAVE A TIE";
;
        }
        round++
    }


// const roundNum = document.querySelector('#roundNum').innerText;
// roundNum = "1";

// - ask user for choice and display
function generateUser() {
    
    document.querySelector('#rockChoice').addEventListener('click', userRock);
    document.querySelector('#paperChoice').addEventListener('click', userPaper);
    document.querySelector('#scissorsChoice').addEventListener('click', userScissors);


    function userRock() {
        userChoice = "Rock";
        document.querySelector('#userChoice').innerText = userChoice;
        generateComputer();
    }

    function userPaper() {
        userChoice = "Paper";
        document.querySelector('#userChoice').innerText = userChoice;
        generateComputer();
    }

    function userScissors() {
        userChoice = "Scissors";
        document.querySelector('#userChoice').innerText = userChoice;
        generateComputer();
    }

}
// - generate choice for computer and display
function generateComputer() {
    
    let randomComputerChoice = Math.floor(Math.random()*3);
    switch (randomComputerChoice) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
    }

    document.querySelector('#computerChoice').innerText = computerChoice;
    playGame();
}
// - compare choice of user with computer
    
function playGame() {
    if ((userChoice === 'Scissors' && computerChoice === 'Paper') || (userChoice === 'Paper' && computerChoice === 'Rock') || (userChoice === 'Rock' && computerChoice === 'Scissors')){
        userPoints += 1;
        document.querySelector('#userPoints').innerText = userPoints;
    } else if (userChoice === computerChoice) {
        console.log('you have same choice')
    } else {
        computerPoints += 1;
        document.querySelector('#computerPoints').innerText = computerPoints;
    }
    
    // console.log(`user choice: ${userChoice} and computer choice: ${computerChoice}`)
    
}

// - determine the winner and add points to their score
    
// - check winner after 10 rounds


// - reset the game (round number)
