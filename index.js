// alert("Test js")

//Declare button colours
let buttonColours = ["red", "blue", "green", "yellow"]

//Pattern that game request
let gamePattern = [];

//Pattern that return from which user click
var userClickedPattern = [];

//Detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    //Store the id of the button that got clicked.
    let userChosenColour = $(this).attr("id");

    //Push element that has been select/click by user variable userClickedPattern
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

})

function nextSequence() {
    //Get random number 0-3 for getting index number
    let randomNumber = Math.floor(Math.random() * 4)

    //Get element by index that randomized
    let randomChosenColour = buttonColours[randomNumber]

    //Push element that has been randomized
    gamePattern.push(randomChosenColour)

    //Select the button with the same ID as the randomchosen and animate a flash
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);;
}

//Refactior playsound before, so will be more effective without DRY
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}