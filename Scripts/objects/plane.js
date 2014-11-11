/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Plane Class
    var Plane = (function () {
        function Plane(stage, game) {
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
            this.image = new createjs.Sprite(managers.Assets.atlas, "plane");
            this.image.y = 130;
            this.image.rotation += 90;
            this.image.regX = this.image.getTransformedBounds().width / 2;
            this.image.regY = this.image.getTransformedBounds().height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Plane.prototype.update = function () {
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
        };
        Plane.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Plane;
    })();
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map