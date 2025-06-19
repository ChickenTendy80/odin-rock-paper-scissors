let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
const buttons = document.querySelectorAll("input");

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

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
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

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    let result = "";

    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            result = "You lose! " + computerChoice + " beats " + humanChoice;
            computerScore++;
        }
        else if(computerChoice == "scissors"){
            result = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
        else{
            return("Tied!");
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            result = "You lose! " + computerChoice + " beats " + humanChoice;
            computerScore++;
        }
        else if(computerChoice == "rock"){
            result = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
        else{
            return("Tied!");
        }
    }
    else{
        if(computerChoice == "rock"){
            result = "You lose! " + computerChoice + " beats " + humanChoice;
            computerScore++;
        }
        else if(computerChoice == "paper"){
            result = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
        else{
            result = "Tied!";
        }
    }

    result += "<br></br>Your Score: " + humanScore + "<br></br>Computer Score: " + computerScore;

    if(humanScore == 5){
        result += "<br></br>You Won!!";
        disableButtons();
    }
    else if(computerScore == 5){
        result += "<br></br>You lost :(";
        disableButtons();
    }
    
    console.log(result);
    const text = document.querySelector(".result");
    text.innerHTML = result;
    return;
}

buttons.forEach(button => {
    button.addEventListener("click", function(){
        playRound(button.value);
    });
});

