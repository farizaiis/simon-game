// alert("Test js")

//Declare button colours
let buttonColours = ['red', 'blue', 'green', 'yellow'];

//Pattern that game request
let gamePattern = [];

//Pattern that return from which user click
let userClickedPattern = [];

//For keeping the game not started before user start it
let started = false;

//Declare level of the game, will be start from zero
let level = 0;

$('.startbutton').click(function () {
    if (!started) {
        //when the game has started, it will show "Level 0"
        $('#level-title').text('Level ' + level);
        nextSequence();
        started = true;
    }
});

//Detect when any of the buttons are clicked and trigger a handler function.
$('.btn').click(function () {
    if(!started) {
        playSound('wrong');

        $('#level-title').text('I told you Bruh to Press Start!');

        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);
        
        startOver();
    } else {
        //Store the id of the button that got clicked.
    let userChosenColour = $(this).attr('id');

    //Push element that has been select/click by user variable userClickedPattern
    userClickedPattern.push(userChosenColour);

    //add sound and animated when click
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1)
    }
});

function checkAnswer(currentLevel) {
    //for check if the most recent user answer is the same as the game pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        //for check that they have finished their sequence
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound('wrong');

        //When the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);

        //Change the h1 title if the user got the answer wrong.
        $('#level-title').text('Game Over, Press Start to Restart');

        //for restart the game when aswer wrong
        startOver();
    }
}

function nextSequence() {
    //reset clickedpattern
    userClickedPattern = [];

    //For up the level of the game when user cleare current level
    level++;
    $('#level-title').text('Level ' + level);

    //Get random number 0-3 for getting index number
    let randomNumber = Math.floor(Math.random() * 4);

    //Get element by index that randomized
    let randomChosenColour = buttonColours[randomNumber];

    //Push element that has been randomized
    gamePattern.push(randomChosenColour);

    //Select the button with the same ID as the randomchosen and animate a flash
    $('#' + randomChosenColour)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomChosenColour);
}

//Refactior playsound before, so will be more effective without DRY
function playSound(name) {
    let audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

//add animation to the user's click
function animatePress(currentColor) {
    //add this pressed class to the button that gets clicked
    $('#' + currentColor).addClass('pressed');

    //remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
}

//for Restart the game when game over
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
