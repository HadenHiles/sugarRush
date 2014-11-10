
module states {
    export function playState() {
        background.update();
        island.update();
        plane.update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count].update();
        }

        islandCollisionManager.update();
        cloudCollisionManager.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game);
        island = new objects.Island(stage, game);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count] = new objects.Cloud(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        islandCollisionManager = new managers.Collision([plane], [island], function(object1:any, object2:any) {
            scoreboard.score += 100;
            object2.reset();
            createjs.Sound.play("yay");
        });
        cloudCollisionManager = new managers.Collision([plane], clouds, function(object1:any, object2:any) {
            scoreboard.lives -= 1;
            object2.reset();
            createjs.Sound.play("thunder");
        });


        stage.addChild(game);
    }
}