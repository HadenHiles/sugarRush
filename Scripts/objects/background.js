var objects;
(function (objects) {
    // Background Class
    var Background = (function () {
        function Background() {
            this.image = new createjs.Bitmap(queue.getResult("background"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.dy = 5;
            stage.addChild(this.image);
            this.reset();
        }
        Background.prototype.reset = function () {
            this.image.y = -960;
        };

        Background.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        };
        return Background;
    })();
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map
