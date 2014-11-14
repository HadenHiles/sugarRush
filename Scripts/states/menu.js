/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/character.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/candy.ts" />
/// <reference path="../objects/movingImage.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function menuState() {
        background.update();
        plane.update();
    }
    states.menuState = menuState;
    function menu() {
        var gameNameLabel;
        var gameInstructions;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        background = new objects.Background(stage, game);
        plane = new objects.Plane(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Title
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 120, "Sugar Rush");
        game.addChild(gameNameLabel);
        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 240, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        // Display Instructions
        gameInstructions = new objects.Instructions(stage.canvas.width / 2, 320, "1. Last as long as you can before you run out of sugar!\n" + "2. Avoid Veggies to keep your sugar meter high.\n" + "3. Collect Candy to boost your sugar meter.");
        game.addChild(gameInstructions);
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map