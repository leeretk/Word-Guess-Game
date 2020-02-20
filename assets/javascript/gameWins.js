//////////////////////// WINS AND LOSSES //////////////////////////////////


// This function is run whenever the user presses Play Again key.
document.onkeyup = function (reset) {

    //variable for each win and loss outcome.
    
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

  // Show lives  
  showWins = function () {
    getLives.innerHTML = "You have " + wins + " wins";
    if (lives < 1) {
      getLives.innerHTML = "Game Over!";
      console.log(showLives);
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        getLives.innerHTML = "You Win!";
        console.log(showLives);       
      };
    };
  }


// Show Wins  

var gameOutcomes = ["win", "lose"];


function (gameOutcomes = "win") {
      
      for (var i = 0; i < mylives.length; i++) {
            if(getLives.innerHTML = "You Win!" ==  )
            
   }
   
   
   ;
    
   console.log(showWins);
};


//var getLives = document.getElementById("mylives");

//var win = myLives.innerHTML = "You Win!";
//var lose = myLives.innerHTML = "Game Over!";


//showWins = function () {

//    for (var i = 0; i < win.length; i++) {
//      if (myLives.innerHTML == win.length) {   
//        alert("You Win!");
//      console.log(showWins);       
 //   };
  //};
//}


// Show Game Outcomes  

var wins=getLives.innerHTML = "You Win!" ;
var loses=getLives.innerHTML = "Game Over!";

showWins = function() {
   if(mylives === wins.length);
  for (var i = 0; i < wins.length; i++);
  alert("You have " + wins + " wins" )
    console.log(showWins);
};

showLosses = function() {

}



//var getLives = document.getElementById("mylives");

//var win = myLives.innerHTML = "You Win!";
//var lose = myLives.innerHTML = "Game Over!";


//showWins = function () {

//    for (var i = 0; i < win.length; i++) {
//      if (myLives.innerHTML == win.length) {   
//        alert("You Win!");
//      console.log(showWins);       
 //   };
  //};
//}


