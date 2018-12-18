// Declare Variables and functions to be used
var numberOptions = [];
var targetNumber = Math.floor((Math.random() * 120+1));
var wins = 0;
var loses =0;
$("#number-to-guess").text(targetNumber); //update div with target number
var counter = 0;

function numberGeneration(object){ //create a function to randomly generate the numbers 
for (var i = 0; i < 4; i++) {
  object.push(Math.floor((Math.random() * 12+1)))
  
};
}
function newGame() { //starts the game over with new numbers and resets values
  numberOptions= [];
  numberGeneration(numberOptions);
  targetNumber = Math.floor((Math.random() * 100+1))+18;
  $("#number-to-guess").text(targetNumber);
  counter= 0;
  var crystals = $('.crystal-image');
  crystals.each(function(i){
    $(this).attr("data-crystalvalue", numberOptions[i])  
  })
   
      }
 
numberGeneration(numberOptions);
// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  $("#playerScore").text("Your Score: "+ counter) //update text to show my current score

  if (counter === targetNumber) {
    wins++;
    $("#wins").text("Wins: "+ wins );
    $("#playerScore").text("Your Score: ")
    newGame();
  }

  else if (counter >= targetNumber) {
    loses++;
    $("#loses").text("Loses: "+ loses );
    $("#playerScore").text("Your Score: ")
    newGame();
  }

});

