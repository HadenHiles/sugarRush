var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 *  File: candy.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is responsible for randomly continuing to add candies from
 *  the candy spritesheet to the screen
 */
var objects;
(function (objects) {
    // Candy Class
    var Candy = (function (_super) {
        __extends(Candy, _super);
        function Candy(stage, game) {
            _super.call(this, stage, game, this.image = new createjs.Sprite(managers.Assets.candy, managers.Assets.candy._animations[this.randomAnimationIdx]));
            this.reset();
            this.dx = 4;
        }
        //Move the candy on the x axis and reset when it goes off screen
        Candy.prototype.moveImage = function () {
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        };
        //Set the candy back to the right of the canvas
        Candy.prototype.reset = function () {
            this.game.removeChild(this.image);
            this.randomAnimationIdx = Math.floor(Math.random() * (managers.Assets.candy._animations.length + 1));
            this.image.scaleX = .7;
            this.image.scaleY = .7;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width;
        };
        return Candy;
    })(objects.AbstractImage);
    objects.Candy = Candy;
})(objects || (objects = {}));
//# sourceMappingURL=candy.js.map