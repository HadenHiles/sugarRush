var objects;
(function (objects) {
    // Cloud class
    var Cloud = (function () {
        function Cloud(stage, game) {
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
            this.image = new createjs.Sprite(managers.Assets.veggies, "red-pepper");
            this.image.scaleX = .4;
            this.image.scaleY = .4;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        Cloud.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        };
        Cloud.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 4 + 4);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = this.stage.canvas.width;
        };
        Cloud.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Cloud;
    })();
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map