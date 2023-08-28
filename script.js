let playerScore;
let computerScore;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const capitalizedPlayerSelection = 
        playerSelection.charAt(0).toUpperCase() + 
        playerSelection.slice(1).toLowerCase();
    
    if (capitalizedPlayerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "Draw";
        } else if (computerSelection == "Paper") {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${capitalizedPlayerSelection}`;
        } else {
            playerScore++;
            return `You Win! ${capitalizedPlayerSelection} beats ${computerSelection}`;
        }
    } else if (capitalizedPlayerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore++;
            return `You Win! ${capitalizedPlayerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "Paper") {
            return "Draw";
        } else {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${capitalizedPlayerSelection}`;
        }
    } else if (capitalizedPlayerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${capitalizedPlayerSelection}`;
        } else if (computerSelection == "Paper") {
            playerScore++;
            return `You Win! ${capitalizedPlayerSelection} beats ${computerSelection}`;
        } else {
            return "Draw";
        }
    } else {
        alert(`This is Rock, Paper, Scissors not ${playerSelection}, Paper, Scissors!`);
    }  
}

function game() {
    playerScore = 0;
    computerScore = 0;

    while(playerScore < 5 && computerScore < 5 ) {
        const playerSelection = prompt('Rock, Paper, Scissors', 'Rock');
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult);
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    }

    if (playerScore === 5) {
        return('You won the game!')
    } else {
        return('You lost the game!')
    }
}
