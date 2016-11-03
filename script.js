jQuery(function() {


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

function playButton() {
  $("#play").click(function(){
    console.log("play clicked!");
    $instructsection.css('visibility', 'hidden');
    $aboutsection.css('visibility', 'hidden');
    $gamesection.css('visibility', 'visible');
  });
};

playButton();

function pickCard() {
  $("#cardpick").click(function(){

  })
}

function createBoard(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns <x; columns++) {
        $("#aboutboard").append("<div class='spacetest'></div>");
    };
  };
  $(".spacetest").width(650/x);
  $(".spacetest").height(650/x);
}

createBoard(8);
































});
