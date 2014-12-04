/**
*  File: game.ts
*  Author: Haden Hiles
*  Last Modified By: Haden Hiles
*  Date Last Modified: November 14th
*  Description:
*  This class is responsible for initializing all objects
*  as well as, creating the game loop, bringing in assets,
*  optimizing for mobile touch screens and triggering what
*  state the game is in.
*/
var stage;
var game;
var background;
var character;
var candy;
var veggies = []; // Veggies array;
var candy = []; // Candy array;
var scoreboard;
var imageGroup;
var obstacleManager;
var candyCollisionManager;
var veggieCollisionManager;
var tryAgain;
var playButton;
var currentState;
var currentStateFunction;
//Preload function - Loads Assets and initializes game
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
//init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
//Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}
//This is the main game loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}
//Change the state of the game between menu, plau, and game over
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}
//# sourceMappingURL=game.js.map