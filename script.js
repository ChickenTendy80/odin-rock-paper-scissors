let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let val = Math.round(Math.random()*10);
    if(val < 3){
        return "rock";
    }
    else if(val < 6){
        return "paper";
    }
    else{
        return "scissors";
    }

}

function getHumanChoice(){
    let human = prompt("Choose between rock, paper, or scissors");
    return human;
}

function playRound(humanChoice, computerChoice){
    let humanChoiceCopy = humanChoice.toLowerCase();

    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if(computerChoice == "scissors"){
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else{
            console.log("Tied!");
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if(computerChoice == "rock"){
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else{
            console.log("Tied!");
        }
    }
    else{
        if(computerChoice == "rock"){
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if(computerChoice == "paper"){
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else{
            console.log("Tied!");
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score: " + humanScore + "\nComputer score: " + computerScore);
    }

    if(humanScore > computerScore){
        console.log("You won!");
    }
    else{
        console.log("You lost!");
    }

    
}

playGame();