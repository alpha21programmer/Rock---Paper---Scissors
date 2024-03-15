let userScore = 0;
let compScore = 0;


const drawGame = () => {
    console.log("It was Draw.");
    msg.innerText = "It was Draw . Play again.";
    msg.style.backgroundColor = " rgb(8, 8, 43)";
};

const showWinner = (userWin) => {
   if (userWin){
    console.log ("You win !")
    msg.innerText = "You win !";
    msg.style.backgroundColor = "green";
   } else {
    console.log ("You lose !")
    msg.innerText = "You lose !";
    msg.style.backgroundColor = "red";
   }
};

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genCompChoice = () => {
    const gameOptions = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return gameOptions[randomIdx];

};

const playGame = (userChoice) => {
    console.log("choice of user = ", userChoice);
    const compChoice = genCompChoice();
    console.log("choice of comp = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
           userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);

    }
};

choices.forEach((choice) => {
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); 
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
})
});