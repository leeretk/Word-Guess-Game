/*--Class=CSS and ID=Javascript-->*/

window.onload = function () {

  //**********************SET VARIABLES************************//

  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var categories;         // Array of topics
  var chosenCategory;     // Selected category
  var getHint;            // Word getHint
  var word;               // Selected word
  var guess;              // guess
  var guesses = [];       // Stored guesses
  var lives;              // Lives
  var counter;            // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var getLives = document.getElementById("mylives");
  var getCatagory = document.getElementById("categories");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  var getWins = document.getElementById("myWins");
  var getLoses = document.getElementById("myLoses");

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

  var selectCategory = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML = "The Chosen Category Is: Wizard";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "The Chosen Category Is: Quidditch";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "The Chosen Category Is: Hogwartz Houses";
    } else if (chosenCategory === categories[3]) {
      categoryName.innerHTML = "The Chosen Category Is: Books";
    }
  }

  // Create guesses ul 
  guessResult = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');
    console.log(correct)
    console.log(wordHolder)

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
      console.log(guess);
          };
  }

  // Show lives  
  showLives = function () {
    getLives.innerHTML = "You have " + lives + " lives";
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
showWins = function () {
  getWins.innerHTML = "You have " + wins + " wins";
  if (wins < 1) {
    getWins.innerHTML = "Game Over!";
    console.log(showWins);
  }
  for (var i = 0; i < win.length; i++) {
    if (counter + space === win.length) {
      getWins.innerHTML = "You Win!";
      console.log(showWins);       
    };
  };
}


  ////////////////////// ANIMATION //////////////////////////////


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
  };

//Define a starting point in position (0,0), and an ending point in position (200,100). Then use the stroke() method to actually draw the line:
//moveTo(x,y) - defines the starting point of the line
//lineTo(x,y) - defines the ending point of the line
//Define a circle with the arc() method. Then use the stroke() method to actually draw the circle:

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

//fillRect(x,y,width,height)

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
    list.onclick = function () 
    
    {
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
        showLives();
        animate();
      } else {
        showLives();
        console.log(lives)
      }

    }
  }

  //**********************PLAY THE GAME ************************    
  playGame = function () {

    categories = [
      ["HARRY", "DOBBY", "DUMBLEDORE", "SNAPE", "SIRIUS", "RON", "HERMIONE", "LUPIN"],//8
      ["KEEPER", "BLUDGER", "CHASER", "SEEKER", "SNITCH", "QUIDDITCH"],//6
      ["SLYTHERIN", "HUFFLEPUFF", "GRYFFINDOR", "RAVENCLAW"],//4
      ["SORCERERS STONE", "CHAMBER OF SECRETS", "PRIZONER OF AZKABAN", "GOBLET OF FIRE", "ORDER OF THE PHOENIX", "HALF BLOOD PRINCE", "DEATHLY HALLOWS"]//7
    ];
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    console.log(guessResult);
    buttons();
    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    guessResult();
    showLives();
    selectCategory();
    canvas();
  };
  playGame();

  //**********************CLUES************************  //on click function for hints
  hint.onclick = function () {
    hints = [
      ["Scar", "Elf", "Powerful Wizard", "Always", "Uncle", "Redhead", "Smart", "Werewolf"], //8
      ["Protects The Goal", "Balls That Attack", "Quaffle", "Snitch", "Catch It ToWin", "Game Played By Wizards"],//6
      ["Salazar", "Helga", "Godric", "Rowena"],//4
      ["Sorting Hat", "Fluffy", "Sirius Returns", "Tournament of Champions", "Delores Umbridge", "The Potions Diary", "Wizard War"],//7
    ];
    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: " + hints[categoryIndex][hintIndex];
  };

  //**********************RESET***********************    
  // This function is run whenever the user presses Play Again key.  // Reset

  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    playGame();
  };
}