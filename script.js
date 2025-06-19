let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

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
    const humanRock = document.querySelector("#rock");
    const humanPaper = document.querySelector("#paper");
    const humanScissors = document.querySelector("#scissors");

    humanRock.addEventListener("click", () => {
        humanChoice = "rock";
    });

    humanPaper.addEventListener("click", () => {
        humanChoice = "paper";
    });

    humanScissors.addEventListener("click", () => {
        humanChoice = "scissors";
    });
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            return("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if(computerChoice == "scissors"){
            return("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else{
            return("Tied!");
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            return("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if(computerChoice == "rock"){
            return("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else{
            return("Tied!");
        }
    }
    else{
        if(computerChoice == "rock"){
            return("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if(computerChoice == "paper"){
            return("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else{
            return("Tied!");
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const container = document.querySelector("container");
        const computerSelection = getComputerChoice();
        const content = document.createElement("div");
        content.textContent = playRound(humanChoice, computerSelection);
        const currScore = document.createElement("div");
        currScore.textContent = "Your score: " + humanScore + "\nComputer score: " + computerScore;

        container.appendChild(content);
        container.appendChild(currScore);
        
    }

    if(humanScore > computerScore){
        console.log("You won!");
    }
    else{
        console.log("You lost!");
    }

    
}

playGame();