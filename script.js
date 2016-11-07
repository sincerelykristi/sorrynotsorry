jQuery(function() {


var $messagebox = $(".messagebox p");
var cardMoves;
var newSpace;
var enPegSelected;
var calc;
var entu;
var yotu;
var calmo;

var $instructsection = $("#instructions");
var $gamesection = $("#game");
var $aboutsection = $("#about");

$aboutsection.css('visibility', 'hidden')
$gamesection.css('visibility', 'hidden');
$instructsection.css('visibility', 'visible');

// Navigation Button Functions
// Instructions Button
function clickInstructions() {
  $("#ins").click(function(){
    console.log("instructions clicked!")
    $gamesection.css('visibility', 'hidden');
    $aboutsection.css('visibility', 'hidden');
    $instructsection.css('visibility', 'visible');
  });
};

clickInstructions();

// Game Button
function clickGame() {
  $("#ga").click(function(){
    console.log("game clicked!")
    $instructsection.css('visibility', 'hidden');
    $aboutsection.css('visibility', 'hidden');
    $gamesection.css('visibility', 'visible');
    yourTurn();
  });
};

clickGame();

// About Button
function clickAbout() {
  $("#ab").click(function(){
    console.log("about clicked!")
    $instructsection.css('visibility', 'hidden');
    $gamesection.css('visibility', 'hidden');
    $aboutsection.css('visibility', 'visible');
  });
};

clickAbout();

// End of Navigation Functions

// ----------------------------------------------------------------



//Play! button on the instructions Page. Hides instructions and about pages and shows the Game.
function playButton() {
  $("#play").click(function(){
    console.log("play clicked!");
    $instructsection.css('visibility', 'hidden');
    $aboutsection.css('visibility', 'hidden');
    $gamesection.css('visibility', 'visible');
    yourTurn();
  });
};

playButton();

//--------------------------------------------------------------------

//Player's turn!

function yourTurn() {
$("#cardpick").css('visibility', 'visible');


//picks a random number, tells the player that number and calls the next function
  function pickCard() {
    $("#cardpick").click(function(){
      $(this).css('visibility', 'hidden');
      cardMoves = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
      $messagebox.text("You drew a " + cardMoves + "! Click on the peg you'd like to move.");
      console.log(cardMoves);
      $("#cardpick").off();
      calculateMoves();
    });
  };

  pickCard();


  function calculateMoves() {
    clearTimeout(entu);
    //switch case for cards!!!!!!
    //Let's you click on a peg to choose it and calculates where you can move that
    //peg based on the card you just drew
    $(".peg").click(function(){
      $(this).css({"border" : "2px solid #AAAAAA"}).addClass("selected");
      $messagebox.text("Now click on the highlighted square to move your peg there!");
      var $currentSpace = parseInt($(this).parent().attr("class").split(' ')[1]);
      console.log($currentSpace);
      newSpace = ($currentSpace + cardMoves);
        if (newSpace > 28) {
          newSpace = 28;
        };
      console.log(newSpace);
      $(".peg").off();
        $("." + newSpace).css({"background-color" : "#AEEE00"}).click(function(){
          if (newSpace === 28) {
            $messagebox.text("You got another peg to the finish and on to fame and glory! ");
            console.log("made it to the finish!")
            $(".selected").fadeOut('slow', function() {
            });
            checkWinnerRed();
          } else if ($("." + newSpace).find("div.enpeg").length != 0){
            console.log("you clicked the space!");
            $("#enemypeghome").append($("." + newSpace).children(".enpeg"));
            $messagebox.text("All's fair in love and war and this square isn't big enough for the both of you. You sent the blue peg back to the start. Ok, time to give them a chance to catch up. Their move next.");
            entu = setTimeout(enemyTurn, 3000);
          } else {
            $messagebox.text("Ok, you made your moves. You deserve a break and you should give the blue peg a chance to catch up.");
            entu = setTimeout(enemyTurn, 2000);
          };
          $(this).append($(".selected"));
          $(this).css({"background-color" : "white"});
          $(".selected").removeClass("selected").css({"border" : "none"});
          $("." + newSpace).off();
        });
      });
    };
};



//End of your turn
//---------------------------------------------------------------------------


function enemyTurn() {

  pickCard();

  function pickCard(){
    clearTimeout(calc);
    cardMoves = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
    $messagebox.text("Welp, enemy drew a " + cardMoves + ". Let's see where they go.");
    calc = setTimeout(calculateMoves, 2000);
  };

  function calculateMoves() {
    clearTimeout(calmo);
    //switch case for cards!!!!!!
    enPegSelected = ("#enpeg" + (Math.floor(Math.random() * (4 - 1 + 1)) + 1));
      if ($(enPegSelected).parents("#playerfinish").length == 1) {
        calculateMoves();
      }
    $(enPegSelected).css({"border" : "2px solid #AAAAAA"}).addClass("selected");
    var $currentSpace = parseInt($(enPegSelected).parent().attr("class").split(' ')[1]);
    newSpace = ($currentSpace + cardMoves);
    if (newSpace > 28) {
          newSpace = 28;
        };
    $("." + newSpace).css({"background-color" : "#AEEE00"});
    calmo = setTimeout(tellMoves, 1500);
  };


  function tellMoves() {
    clearTimeout(yotu);
     if (newSpace === 28) {
            $messagebox.text("You're slacking! Blue just got a peg home!");
            console.log("BLUE MADE ONE IN");
            $(".selected").fadeOut('slow', function() {
            });
            checkWinnerBlue();
        } else if ($("." + newSpace).find(".peg").length != 0){
            $messagebox.text("You're slacking! Blue just got a peg home!");
            console.log("BLUE MADE ONE IN");
            $(".selected").fadeOut('slow', function() {
            });
            checkWinnerBlue();
            $("#peghome").append($("." + newSpace).children(".peg"));
            $messagebox.text("Oh no they didn't! The blue peg sent your peg back home. Better hustle to catch up!");
            yourTurn();
        } else {
        $messagebox.text("They got pretty far. Better hustle so you don't fall behind!");
        yotu = setTimeout(yourTurn, 2500);
        };
      $("." + newSpace).append($(".selected"));
      $("." + newSpace).css({"background-color" : "white"});
      $(".selected").removeClass("selected").css({"border" : "none"});
  };
};



function checkWinnerRed() {
  if ($(".28 .peg").length === 3) {
  $messagebox.text("Crushed it! You got all of the pegs off the board and you WIN!");
  } else {
  clearTimeout(entu);
  console.log("enemy turn");
  entu = setTimeout(enemyTurn, 2500);
  };
};

function checkWinnerBlue() {
  if ($(".28 .enpeg").length === 3) {
  $messagebox.text("#EPICFAIL...Blue got all their pegs home. Play again when you're feeling a little more unapologetic.");
  } else {
  clearTimeout(entu);
  console.log("enemy turn");
  yotu = setTimeout(yourTurn, 2500);
  };
};
























});
