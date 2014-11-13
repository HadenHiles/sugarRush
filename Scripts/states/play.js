var states;
(function (states) {
    function playState() {
        background.update();
        island.update();
        plane.update();
        for (var count = 0; count < clouds.length; count++) {
            clouds[count].update();
        }
        islandCollisionManager.update();
        cloudCollisionManager.update();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            obstacleManager.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
    function play() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        background = new objects.Background(stage, game);
        island = new objects.Island(stage, game);
        plane = new objects.Plane(stage, game);
        // Show Cursor
        stage.cursor = "none";
        clouds = [];
        obstacleManager = new managers.ObstacleManager(stage, game, managers.Assets.veggies, function (displayObject) {
            var idx = clouds.length;
            clouds[idx] = displayObject;
        });
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        islandCollisionManager = new managers.Collision([plane], [island], function (object1, object2) {
            scoreboard.score += 100;
            object2.reset();
            createjs.Sound.play("slurp");
        });
        cloudCollisionManager = new managers.Collision([plane], clouds, function (object1, object2) {
            scoreboard.lives -= 1;
            object2.reset();
            createjs.Sound.play("ew");
        });
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map