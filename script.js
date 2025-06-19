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
        return "rock";
    });

    humanPaper.addEventListener("click", () => {
        return "paper";
    });

    humanScissors.addEventListener("click", () => {
        return "scissors";
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
    let humanChoice = getHumanChoice();
    while(humanChoice == undefined){
        humanChoice = getHumanChoice();
    }
    alert(humanChoice);
    const robotChoice = getComputerChoice();
    alert(robotChoice);
    
    const results = document.querySelector("text-victory");
    const scores = document.querySelector("score");

    results.textContent = playRound();
    scores.textContent = "Your score: " + humanScore + "\nRobot Score: " + computerScore;
}

playGame();
