/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function () {
        function Ocean(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }
        Ocean.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        };

        Ocean.prototype.reset = function () {
            this.image.y = -960;
        };

        Ocean.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Ocean;
    })();
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
