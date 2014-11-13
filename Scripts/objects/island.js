/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Island = (function () {
        function Island(stage, game) {
            var _this = this;
            Object.defineProperty(this, "x", {
                get: function () {
                    return _this.image.x;
                }
            });
            Object.defineProperty(this, "y", {
                get: function () {
                    return _this.image.y;
                }
            });
            Object.defineProperty(this, "height", {
                get: function () {
                    return _this.image.getTransformedBounds().height;
                }
            });
            Object.defineProperty(this, "width", {
                get: function () {
                    return _this.image.getTransformedBounds().width;
                }
            });
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "candy");
            this.image.scaleX = .7;
            this.image.scaleY = .7;
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
            this.image.x = this.stage.canvas.width;
        };
        Island.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Island;
    })();
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map