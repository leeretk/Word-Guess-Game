
  // Show Wins

  var getWins = document.getElementById("wins").innerHTML= "You Win!";
  var getLoses = document.getElementById("loses").innerHTML= "Game Over!";
   
  var userWins = 0;   //if lives > 0 you win
  var userLosses = 0;  //if lives = 0 you lose
   
    winLossOutcome = function () {
      for (var i = 0; i < userWins.length; i++) {
        if (counter + space === userWins.length) {
          getLives.innerHTML = "You Win!";
        }
      }
    };
 
    console.log("this is the guess outcome " + guessOutcome)
  
    if (guessResult == "Game Over!") {
      console.log("lose");
      userLoses++;
      console.log(" Lost: " + userLoses);
    }
    else if (guessResult == "You Win!") {
      console.log("win");
      userWins++;
      console.log(" wins: " + userWins);
    }
  };