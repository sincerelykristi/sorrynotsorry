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
  });
};

playButton();

//Picks a random number between 1-10 and assigns movement meaning to card
function pickCard() {
  $("#cardpick").click(function(){
    $("#cardpick").css('visibility', 'hidden');
    var $cardMoves = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
    $messagebox.text("You drew a " + $cardMoves + "! Click on the peg you'd like to move.");
    return $cardMoves;
  });
};

pickCard();

function makeMoves() {
  $(".peg").click(function(){
    $(this).css({"border" : "2px solid black"});
    $messagebox.text("Now click on the highlighted square to move your peg there!");
    var $currentSpace = $(this).parent();
    console.log($currentSpace);
  });
};

makeMoves();


//     var $selected = $(".peg").click(function(){
//       $(this).css({"border" : "3px solid black"});
//       $messagebox.text("Now click the highlighted box to move that peg.")
//     });



//Dynamically created board.
// function createBoard(x) {
//   for (var rows = 0; rows < x; rows++) {
//     for (var columns = 0; columns <x; columns++) {
//         $("#aboutboard").append("<div class='spacetest'></div>");
//     };
//   };
//   $(".spacetest").width(650/x);
//   $(".spacetest").height(650/x);
// }

// createBoard(8);

// function createPlayerPegs(p) {
//   console.log("creating pegs");
//     for (var $pegs = 0; $pegs < p; $pegs++) {
//         $($spacetest[18]).append("<div class='peg'><div/>");
//   }
// };

// createPlayerPegs(4);






































});
