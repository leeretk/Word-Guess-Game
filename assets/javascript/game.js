/*--Class=CSS and ID=Javascript-->*/

window.onload = function () {

  //**********************SET VARIABLES************************

  //category    --> categories -->categories.indexOf(chosenCategory)  --> getCategory --> chosenCategory --> categoryName --> categoryIndex --> categoryIndex|hintIndex
  //hint        --> hints       --> getHint   --> hintIndex (chosenWord)
  //clue        --> getClue
  //lives       --> getLives  --> myLives
  //buttons     --> letters   --> myButtons
  //list        --> li        --> list.id (letters)
  //letters     --> list      --> letters.id (alphabet)
  //guess       --> guesses [] --> userGuess --> correct
  //class       --> 
  //word        --> space     --My-Word  -->hold        --> wordHolder
  //result      --> 
  //comments
  //selectCat
  //canvas
  //id

  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var categories;       // Array of topics
  var word;             // Selected word
  var lives;            // Lives
  var counter;          // Count correct guesses
  var space;            // Number of spaces in word '-'
  var hint;

  // Selection
  var guess;             // guess
  var guesses = [];      // Stored guesses
  var chosenCategory;    // Selected category

  // Get elements
  var getCategory = document.getElementById("category");
  var getHint = document.getElementById("hint");
  var getLives = document.getElementById("mylives");
  var getClue = document.getElementById("clue");

  // create alphabet ul
  var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {

      letters.id = 'alphabet';

      list = document.createElement('li');
      list.id = 'letter';

      list.innerHTML = alphabet[i];
      check();

      myButtons.appendChild(letters);

      letters.appendChild(list);
    }
  }

  //**********************CHOOSE CATEGORY************************    

  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML = "The Chosen Category Is: Wizard";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "The Chosen Category Is: Quidditch";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "The Chosen Category Is: Hogwartz Houses";
    } else if (chosenCategory === categories[3]) {
      categoryName.innerHTML = "The Chosen Category Is: Books";
    }
  };

  // Create guesses ul
  result = function () {

    wordHolder = document.getElementById('hold');

    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {

      correct.setAttribute('id', 'my-word');

      guess = document.createElement('li');

      guess.setAttribute('class', 'guess');

      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;

      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);

      wordHolder.appendChild(correct);

      correct.appendChild(guess);
    }
  }

  // Show lives  
    comments = function () {
    getLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      getLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        getLives.innerHTML = "You Win!";
      }
    }
  }

  //////////////////////////////////WINS AND LOSSES //////////////////////////////

  //variable for each win and loss outcome.

  var userWins = 0;
  var userLoses = 0;

  //if lives = 0 you lose
  //if lives > 0 you win


  // This function is run whenever the user presses a key.
  document.onkeyup = function (event) {

    // Determines which OUTCOME WAS  was pressed. //user selects r, p, s 
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess. //computer selects r, p, s 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    console.log("this is the user guess  " + userGuess)
    console.log("this is the computer guess  " + computerGuess)


    if (userGuess == "r" && computerGuess == "s") {
      console.log("you win");
      userWins++;
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);

    }

    else if (userGuess == "r" && computerGuess == "p") {
      console.log("you lose");
      userLoses++;
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);
    }

    else if (userGuess == "r" && computerGuess == "r") {
      console.log("you tie");
      userTies++;
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);
    }

    else if (userGuess == "s" && computerGuess == "s") {
      console.log("you tie");
      userTies++;
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);
    }

    else if (userGuess == "s" && computerGuess == "p") {
      console.log("you win");
      userWins++;
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);
    }

    else if (userGuess == "s" && computerGuess == "r") {
      console.log("you lose");
      userLoses++;
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);

    }

    else if (userGuess == "p" && computerGuess == "s") {
      console.log("you lose");
      userLoses++;
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);
    }

    else if (userGuess == "p" && computerGuess == "p") {
      console.log("you tie");
      userTies++;
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);
    }

    else {
      console.log("you win");
      userWins++
      console.log(" wins: " + userWins + " ties: " + userTies + " loses: " + userLoses);
    }
  };


  //////////////////////////////////////////////////////// ANIMATION //////////////////////////////


  // Animate man
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  }

  // Hangman
  canvas = function () {

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  }

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

  // OnClick Function
  check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }

  //**********************PLAY THE GAME ************************    
  play = function () {
    categories = [
      ["Harry", "Dobby", "Dumbledore", "Snape", "Sirius", "Ron", "Hermione", "Lupin"],//8
      ["Keeper", "Bludger", "Chaser", "Seeker", "Snitch", "Quidditch"],//6
      ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"],//4
      ["SorcerersStone", "ChamberOfSecrets", "PrizonerOfAzkaban", "GobletOfFire", "OrderOfThePhoenix", "HalfBloodPrince", "DeathlyHallows"]//7
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];

    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");

    console.log(word);
    buttons();
    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }
  play();

  //**********************CLUES************************  //on click function for hints
  hint.onclick = function () {

    hints = [
      ["Scar", "Elf", "Powerful Wizard", "Always", "Uncle", "Redhead", "Smart", "Werewolf"], //8
      ["ProtectsTheGoal", "BallsThatAttack", "Quaffle", "Snitch", "CatchItToWin", "GamePlayedByWizards"],//6
      ["Salazar", "Helga", "Godric", "Rowena"],//4
      ["SortingHat", "Fluffy", "SiriusReturns", "TournamentofChampions", "DeloresUmbridge", "ThePotionsDiary", "Wizard War"]//7
    ];

    var categoryIndex = categories.indexOf(chosenCategory);

    var hintIndex = chosenCategory.indexOf(word);

    getClue.innerHTML = "Clue:  -" + hints[categoryIndex][hintIndex];
  };

  //**********************RESET***********************    
  // Reset

  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    getClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}
