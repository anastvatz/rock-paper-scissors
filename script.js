let arr = ["ROCK","PAPER","SCISSORS"];
let score = 0;
console.log(game());

function getComputerChoice(){
    return arr[(Math.floor(Math.random() * arr.length))];
}

function playRound(playerSelection , computerSelection ){
    // console.log(computerSelection);
    if (computerSelection== playerSelection.toUpperCase()){
        return "It's a tie!";
    }
    else if (playerSelection.toUpperCase()== "ROCK" && computerSelection== "SCISSORS" ){
        score +=1;
        return "Congratulations! You won!";
    }
    else if (playerSelection.toUpperCase()== "PAPER" && computerSelection== "ROCK" ){
        score +=1; 
        return "Congratulations! You won!";
    }
    else if (playerSelection.toUpperCase()== "SCISSORS" && computerSelection== "PAPER" ){
        score +=1;
        return "Congratulations! You won!";
    }
    else{
        score -=1;
        return "You Lose," + computerSelection.toLowerCase() + " beats " + playerSelection.toLowerCase();
    }
}

function game(){
    for (let i=0; i<=4; i++){
        let playerSelection = prompt("Choose Rock, Paper or Scissors");
        console.log(playRound(playerSelection , getComputerChoice() ));
    }
    if (score>0){
        return "Congratulations! You are the winner!";
    }
    else if (score<0){
        return "You lost, but you can try again:)";
    }
    else {
        return "It's a tie";
    } 
}