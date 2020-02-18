//////////////////////// WINS AND LOSSES //////////////////////////////////



// This function is run whenever the user presses Play Again key.
document.onkeyup = function (reset) {

    //variable for each win and loss outcome.
    var gameOutcomes = ["win", "lose"];
    console.log(gameOutcomes[0]);
    console.log(gameOutcomes[1]);

    var userWins = 0;   //if lives = 0 you lose
    var userLoses = 0;  //if lives > 0 you win

 var LogWinLoss = reset.key;

 var w = gameOutcomes[Math.floor(Math.userGuess() * gameOutcomes.length)];

  console.log("this is the user guess  " + userGuess)
  console.log("this is the computer guess  " + computerGuess)

  if (gameOutcomes == "win") {
    console.log("you win");
    userWins++;
    console.log(" wins: " + userWins + " loses: " + userLoses);
  }

   else {
    console.log("you lose");
    userLoses++
    console.log(" wins: " + userWins + " loses: " + userLoses);
  }
  showWins();
  showLoses();

};
