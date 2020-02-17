/*--Class=CSS and ID=Javascript-->*/

window.onload = function () {


//**********************SET VARIABLES************************

    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var word;              // Selected word
    var guess;             // Geuss
    var geusses = [];      // Stored geusses
    var lives;             // Lives
    var counter;           // Count correct geusses
    var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("categories");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  var showWins = document.getElementById("myWins");
  var showLosses = document.getElementById("myLosses");
    

//**********************CREATE ALPHABET************************    

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
    };

        //**********************CHOOSE CATEGORY************************    

        var selectCat = function () {
            if (chosenCategory === categories[0]) {
                catagoryName.innerHTML = "The Chosen Category Is Wizards";
            } else if (chosenCategory === categories[1]) {
                catagoryName.innerHTML = "The Chosen Category Is Quidditch";
            } else if (chosenCategory === categories[2]) {
                catagoryName.innerHTML = "The Chosen Category Hogwartz Houses";
            } else if (chosenCategory === categories[2]) {
                catagoryName.innerHTML = "The Chosen Category Books";
            }
        };

    //**********************CREATE GUESSES (LIST UL) ************************       

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
            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    };


    //**********************LIVES************************

    //Show Lives
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("catagory");

    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    };

    //**********************CLUES************************

    //Show Hints/Clues
  
  
  var getHint = document.getElementById("hint");    
  var showClue = document.getElementById("clue");


    //on click function for hints

    hint.onclick = function () {

        hints = [
            ["Has a scar", "Protects Harry", "Most Powerful Wizard", "Always", "Transfiguration", "Harry's friend", "The Smart One", "Werewolf"],
            ["Protects the goal", "Balls that attack", "Goes after the snitch", "Catch to win the game", "Game played by wizards"],
            ["Salazar", "Helga", "Godric", "Rowena", "There are Four"],
            ["Sorting Hat", "Fluffy", "Sirius Returns", "Tournament of Champions", "Delores Umbridge", "The Potions Diary", "War"]
        ];


        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);

        showClue.innerHTML = "Clue: - " + hints[catagoryIndex][hintIndex];
    };

    


   
    //**********************HANGMAN************************      

    // Animate man
    var animate = function () {
        var drawMe = lives;
        drawArray[drawMe]();
    };

    // Hangman
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
    draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    };
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

    // OnClick Function
    check = function () {
        list.onclick = function () {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        };
    };

//**********************WINS************************

    //Show Wins
    var wins;               //Wins
    var getWin = document.getElementById("win");
    var showWins = document.getElementById("myWins");
    var Wins = 0;

    comments = function () {
        showWins.innerHTML = "You have " + Wins + " Wins";
        if (Wins < 1) {
            showWins.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showWins.innerHTML = "You Win!";
            }
        }
    };


    //**********************LOSSES************************
        
    var losses;             //Losses
    var getLose = document.getElementById("lose");
    var showLoses = document.getElementById("myLosses");
    var Losses = 0;

    comments = function () {
        showLosses.innerHTML = "You have " + Losses + " Losses";
        if (Losses < 1) {
            showLosses.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLosses.innerHTML = "You Lose";
            }
        }
    };

    //**********************PLAY THE GAME ************************    

    // Play
    play = function () {
        categories = [
            ["harry", "dobby", "dumbledore", "snape", "sirius", "ron", "hermione", "lupin", "wizards"],
            ["keeper", "bludger", "chaser", "seeker", "snitch", "quidditch"],
            ["slytherin", "hufflepuff", "gryffindor", "ravenclaw", "hogwarts houses"],
            ["sorcerers stone", "chamber of secrets", "prizoner of Azkaban", "goblet of fire", "order of the phoenix", "half-blood prince", "deathly hallows"],
        ];
        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();
        geusses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    };
  play();





    //**********************RESET***********************    

    document.getElementById('reset').onclick = function () {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
    };
};
