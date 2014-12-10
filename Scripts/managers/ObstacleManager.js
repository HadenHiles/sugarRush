/**
 *  File: ObstacleManager.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is responsible for controlling, when and
 *  how many obstacles to place on the screen at any given time
 */
var managers;
(function (managers) {
    // Collision Manager Class
    var ObstacleManager = (function () {
        function ObstacleManager(stage, game, spriteSheet, newDisplayObjectCallback) {
            var _this = this;
            this.displayObjectsCreated = 0;
            this.tickCount = 0;
            this.stage = stage;
            this.game = game;
            this.spriteSheet = spriteSheet;
            this.newDisplayObjectCallback = newDisplayObjectCallback;
            this.addDisplayObjectProxy = function (tickEvent) {
                _this.addDisplayObject.apply(_this, tickEvent);
            };
            createjs.Ticker.addEventListener("tick", this.addDisplayObjectProxy);
        }
        //Control the number of display objects that are added to the screen
        ObstacleManager.prototype.addDisplayObject = function (tickEvent) {
            //Gather random sprites from the veggies spritesheet
            if (this.tickCount++ > 0 && this.tickCount % 60 == 0) {
                var randomAnimationIdx = Math.floor(Math.random() * (this.spriteSheet._animations.length + 1));
                var image = new createjs.Sprite(this.spriteSheet, this.spriteSheet._animations[randomAnimationIdx]);
                var o = new objects.MovingImage(stage, game, image);
                this.displayObjectsCreated++;
                this.newDisplayObjectCallback(o);
                this.tickCount = 0;
            }
            //Only allow a max of 20 display objects to be on the stage at any given time
            if (this.displayObjectsCreated >= 20) {
                createjs.Ticker.removeEventListener("tick", this.addDisplayObjectProxy);
            }
        };
        //Stop adding obstacles to the game
        ObstacleManager.prototype.destroy = function () {
            createjs.Ticker.removeEventListener("tick", this.addDisplayObjectProxy);
        };
        return ObstacleManager;
    })();
    managers.ObstacleManager = ObstacleManager;
})(managers || (managers = {}));
//# sourceMappingURL=ObstacleManager.js.map