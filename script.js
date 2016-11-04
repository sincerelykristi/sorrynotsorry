jQuery(function() {

// var $spacetest = $(".spacetest");
// console.log($spacetest[8]);
// console.log($spacetest[9]);


// var movement = [0,1,2,3,4,5,6,7,8,
//                 15,16,23,24,31,32,
//                 39,40,47,48,56,57,
//                 58,59,60,61,62,63,64];

// var $cardMoves = "";
var $messagebox = $(".messagebox p");
var cardMoves;
var newSpace;
var enPegSelected;

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

// function createPegs() {
//   console.log("creating pegs");
//   var $pegs = $("<div class='peg'></div>");
//   for(i = 0;i < 4;i++ )
// };

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
 $("#cardpick").click(function(){
  pickCard();
  });
//picks a random number, tells the player that number and calls the next function
  function pickCard(){
    $("#cardpick").css('visibility', 'hidden');
      cardMoves = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
      $messagebox.text("You drew a " + cardMoves + "! Click on the peg you'd like to move.");
      console.log(cardMoves);
      calculateMoves();
  };


  function calculateMoves() {
    //switch case for cards!!!!!!
    $(".peg").click(function(){
      $(this).css({"border" : "2px solid black"}).addClass("selected");
      $messagebox.text("Now click on the highlighted square to move your peg there!");
      var $currentSpace = parseInt($(this).parent().attr("class").split(' ')[1]);
      console.log($currentSpace);
      newSpace = ($currentSpace + cardMoves);
      console.log(newSpace);
      $(".peg").off();
        $("." + newSpace).css({"background-color" : "yellow"}).click(function(){
          if ($("." + newSpace).find("div.enpeg").length != 0){
            console.log("you clicked the space!");
            $("#enemypeghome").append($("." + newSpace).children(".enpeg"));
            $messagebox.text("All's fair in love and war and this square isn't big enough for the both of you. You sent the blue peg back to the start. Ok, time to give them a chance to catch up. Their move next.");
          } else {
            $messagebox.text("Ok, you made your moves. You deserve a break and you should give the blue peg a chance to catch up.")
          }
          $(this).append($(".selected"));
          $(this).css({"background-color" : "white"});
          $(".selected").removeClass("selected").css({"border" : "none"});
          $("." + newSpace).off();
          setTimeout(enemyTurn, 2000);
        });
      });
    };
};



//End of your turn
//---------------------------------------------------------------------------


function enemyTurn(){

pickCard();

  function pickCard(){
        cardMoves = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
        console.log(cardMoves);
        $messagebox.text("Welp, enemy drew a " + cardMoves + ". Let's see where they go.");
        setTimeout(calculateMoves, 2000);
    };

  function calculateMoves() {
      //switch case for cards!!!!!!
      enPegSelected = ("#enpeg" + (Math.floor(Math.random() * (4 - 1 + 1)) + 1));
      console.log("This is the enPeg" + enPegSelected);
      $(enPegSelected).css({"border" : "2px solid black"}).addClass("selected");
        var $currentSpace = parseInt($(enPegSelected).parent().attr("class").split(' ')[1]);
          console.log($currentSpace);
          newSpace = ($currentSpace + cardMoves);
          console.log(newSpace);
        $("." + newSpace).css({"background-color" : "yellow"});
          setTimeout(tellMoves, 1000);
      };


  function tellMoves() {

            if ($("." + newSpace).find(".peg").length != 0){
              $("#peghome").append($("." + newSpace).children(".peg"));
                $messagebox.text("Oh no they didn't! The blue peg sent your peg back home. Better hustle to catch up!");
            } else {
              $messagebox.text("They got pretty far. Better hustle so you don't fall behind!");
            }
            console.log(".selected" + "This is Selected")
            $("." + newSpace).append($(".selected"));
            $("." + newSpace).css({"background-color" : "white"});
            $(".selected").removeClass("selected").css({"border" : "none"});
            setTimeout(yourTurn, 2000);
  };
};








































});
