/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    export function gameOverState() {
        ocean.update();
    }

    // Restart Game when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // Game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        stage.addChild(game);

    }
}