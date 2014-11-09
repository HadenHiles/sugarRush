/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Cloud = (function () {
        function Cloud(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "cloud");
            this.image.x = 480;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        Cloud.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x += this.dx;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            }
        };
        Cloud.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.image.x = -this.width;
        };
        Cloud.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Cloud;
    })();
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map