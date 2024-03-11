
const choices=["ROCK", "PAPER", "SCISSORS"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");

function playGame(userChoice) {
    const computerChoice=choices[Math.floor(Math.random() * 3)];
    let result="";
    if (userChoice==computerChoice)
    {
        result="IT'S A TIE";
    }
    else 
    {
        switch(userChoice)
        {
            case "ROCK":
                result = (computerChoice=="SCISSORS") ? "YOU WIN!" : "YOU LOST!"; 
                break; 
            
            case "PAPER":
                result = (computerChoice=="ROCK") ? "YOU WIN!" : "YOU LOST!"; 
                break;

            case "SCISSORS":
                result = (computerChoice=="PAPER") ? "YOU WIN!" : "YOU LOST!"; 
                break; 
        }
    }
    playerDisplay.innerHTML = `PLAYER: ${userChoice}`;
    computerDisplay.innerHTML = `COMPUTER: ${computerChoice}`;
    resultDisplay.innerHTML =  result;
    resultDisplay.classList.remove("green", "red", "purple");

    switch(result)
    {
        case "YOU WIN!":
            resultDisplay.classList.add("green");
            break;
        
        case "YOU LOST!":
            resultDisplay.classList.add("red");
            break;
        
        case "IT'S A TIE":
            resultDisplay.classList.add("purple");
            break;
    }
}



