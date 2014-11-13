/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/character.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/movingImage.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function menuState() {
        background.update();
        plane.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 120, "Sugar Rush");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 240, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 