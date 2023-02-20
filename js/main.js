// what do we want to do???

// - display round Number

let userChoice;
let userPoints;
let computerChoice;
let computerPoints;

for (let i = 1; i <= 10; i++) {
    document.querySelector('#roundNum').innerHTML = i;
    
    generateUser();
    generateComputer();
    playGame();
    displayResult();

}
    // document.querySelector('#gameOver').
        
    function displayResult() {
        if (userPoints > computerPoints) {
            document.querySelector('#winner').innerText = "YOU ARE THE WINNER";
        } else if (userPoints == computerPoints) {
            document.querySelector('#winner').innerText = "YOU HAVE A TIE";
        } else {
            document.querySelector('#winner').innerText = "THE COMPUTER WON THE GAME";
        }
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
    }

    function userPaper() {
        userChoice = "Paper";
        document.querySelector('#userChoice').innerText = userChoice;
    }

    function userScissors() {
        userChoice = "Scissors";
        document.querySelector('#userChoice').innerText = userChoice;
    }

}
// - generate choice for computer and display
function generateComputer() {
    
    let randomComputerChoice = Math.random();
    if (randomComputerChoice < 0.3) {
        computerChoice = "Rock";
    } else if (randomComputerChoice < 0.6) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    document.querySelector('#computerChoice').innerText = computerChoice;
}
// - compare choice of user with computer
    
function playGame() {
    if ((userChoice === 'Scissors' && computerChoice === 'Paper') || (userChoice === 'Paper' && computerChoice === 'Rock') || (userChoice === 'Rock' && computerChoice === 'Scissors')){
        userPoints++;
    } else if (userChoice == computerChoice) {
        
    } else {
        computerPoints++;
    }
    document.querySelector('#userPoints').innerText = userPoints;
    document.querySelector('#computerPoints').innerText = computerPoints;
 
}

// - determine the winner and add points to their score
    
// - check winner after 10 rounds


// - reset the game (round number)
