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
            return `You Lose! ${computerSelection} beats ${capitalizedPlayerSelection}`;
        } else {
            return `You Win! ${capitalizedPlayerSelection} beats ${computerSelection}`;
        }
    } else if (capitalizedPlayerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return `You Win! ${capitalizedPlayerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "Paper") {
            return "Draw";
        } else {
            return `You Lose! ${computerSelection} beats ${capitalizedPlayerSelection}`;
        }
    } else if (capitalizedPlayerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return `You Lose! ${computerSelection} beats ${capitalizedPlayerSelection}`;
        } else if (computerSelection == "Paper") {
            return `You Win! ${capitalizedPlayerSelection} beats ${computerSelection}`;
        } else {
            return "Draw";
        }
    } else {
        alert(`This is Rock, Paper, Scissors not ${playerSelection}, Paper, Scissors!`);
    }  
}
