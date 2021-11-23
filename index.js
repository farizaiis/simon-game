// alert("Test js")

//Declare button colours
let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = [];


function nextSequence() {
    //Get random number 0-3 for getting index number
    let randomNumber = Math.floor(Math.random() * 4)

    //Get element by index that randomized
    let randomChosenColour = buttonColours[randomNumber]

    //Push element that has been randomized
    gamePattern.push(randomChosenColour)
}