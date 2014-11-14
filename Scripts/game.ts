﻿/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/movingImage.ts" />
/// <reference path="objects/candy.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/character.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />

var stage: createjs.Stage;
var game: createjs.Container;

var background: objects.Background;
var plane: objects.Plane;
var candy: objects.Candy;
var clouds = []; // Clouds array;
var scoreboard: objects.Scoreboard;

var obstacleManager: managers.ObstacleManager;
var candyCollisionManager: managers.Collision;
var veggieCollisionManager: managers.Collision;

var tryAgain: objects.Button;
var playButton: objects.Button;

var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}

function changeState(state: number): void {
    // Launch Various "screens"
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





