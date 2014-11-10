/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Island = (function () {
        function Island(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "island");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dx = 4;
            game.addChild(this.image);
        }
        Island.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        };
        Island.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = 480;
        };
        Island.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Island;
    })();
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map