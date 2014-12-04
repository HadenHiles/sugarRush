/**
 *  File: background.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is responsible for added and moving the
 *  background to make it appear like the game is scrolling
 */
var objects;
(function (objects) {
    // Background Class
    var Background = (function () {
        function Background(stage, game) {
            this.stage = stage;
            this.game = game;
            this.whiteBg = new createjs.Bitmap(managers.Assets.loader.getResult("white"));
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.image.x = 0;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            this.dx = 5;
            game.addChild(this.whiteBg);
            game.addChild(this.image);
        }
        //Move the background image right to left on the x axis
        Background.prototype.update = function () {
            this.image.x = this.image.x - this.dx;
            if (this.image.x <= -480) {
                this.reset();
            }
        };
        //Reset the background back to the right of the screen
        Background.prototype.reset = function () {
            this.image.x = 0;
        };
        //Remove the background
        Background.prototype.destroy = function () {
            game.removeChild(this.whiteBg);
            game.removeChild(this.image);
        };
        return Background;
    })();
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map