var objects;
(function (objects) {
    // Background Class
    var Background = (function () {
        function Background(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.image.x = 0;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            this.dx = 5;
            game.addChild(this.image);
        }
        Background.prototype.update = function () {
            this.image.x = this.image.x - this.dx;
            if (this.image.x <= -480) {
                this.reset();
            }
        };
        Background.prototype.reset = function () {
            this.image.x = 0;
        };
        Background.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Background;
    })();
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map