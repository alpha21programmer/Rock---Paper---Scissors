let userScore = 0;
let compScore = 0;


const drawGame = () => {
    console.log("It was Draw.Play again.");
    msg.innerText = "It was Draw . Play again.";
    msg.style.backgroundColor = " rgb(8, 8, 43)";
};

const showWinner = (userWin, userChoice, compChoice) => {
   if (userWin){
    userScore++;
    userScores.innerText = userScore;
    console.log (`You win !`)
    msg.innerText = `You win ! Your ${userChoice} beats Comp ${compChoice}`;
    msg.style.backgroundColor = "green";
   } else {
    compScore++;
    compScores.innerText = compScore;  
    console.log ("You lose !")
    msg.innerText = `You lose !     Comp ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
};

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScores = document.querySelector("#user-score");
const compScores = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#btn");

const genCompChoice = () => {
    const gameOptions = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return gameOptions[randomIdx];

};

resetBtn.addEventListener("click", () => {
   userScore = 0;
   compScore = 0;
   document.getElementById("user-score").textContent = userScore;
   document.getElementById("comp-score").textContent = compScore;
   msg.innerText = "Play your move!";
   msg.style.backgroundColor = " rgb(8, 8, 43)";
  });

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
        showWinner(userWin, userChoice, compChoice);

    }
};

choices.forEach((choice) => {
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); 
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
})
});