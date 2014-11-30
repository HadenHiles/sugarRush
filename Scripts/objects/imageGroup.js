/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-11-30
 * Time: 12:09 PM
 * To change this template use File | Settings | File Templates.
 */
var objects;
(function (objects) {
    var ImageGroup = (function () {
        function ImageGroup(stage, game, obstacleGroup, groupKind) {
            this.stage = stage;
            this.game = game;
            this.obstacleGroup = obstacleGroup;
            var bounds = this.obstacleGroup.getBounds();
            bounds.width = 500;
            bounds.height = 500;
            this.obstacleGroup.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
            this.obstacleGroup.regX = bounds.width / 2;
            this.obstacleGroup.regY = bounds.height / 2;
            this.groupKind = groupKind;
            this.image = new createjs.Sprite(managers.Assets.atlas, "candy-craver");
            this.image2 = new createjs.Sprite(managers.Assets.atlas, "candy-craver");
            this.image3 = new createjs.Sprite(managers.Assets.atlas, "candy-craver");
            this.image4 = new createjs.Sprite(managers.Assets.atlas, "candy-craver");
            this.image2.x += 200;
            this.image3.y += 200;
            this.image4.x += 200;
            this.image4.y += 200;
            this.obstacleGroup.addChild(this.image, this.image2, this.image3, this.image4);
            this.game.addChild(this.obstacleGroup);
        }
        //Move the group on the x and y axis
        ImageGroup.prototype.update = function () {
            this.obstacleGroup.y += this.dy;
            this.obstacleGroup.x -= this.dx;
            this.obstacleGroup.rotation += 15;
            if (this.obstacleGroup.x <= 0) {
                this.reset();
            }
        };
        //Reset the positioning of the moving image to be at a random coordinate off to the right of the screen
        ImageGroup.prototype.reset = function () {
            this.obstacleGroup.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 4 + 4);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.obstacleGroup.x = this.stage.canvas.width * 1.25;
        };
        //Remove the image
        ImageGroup.prototype.destroy = function () {
            this.game.removeChild(this.obstacleGroup);
        };
        return ImageGroup;
    })();
    objects.ImageGroup = ImageGroup;
})(objects || (objects = {}));
//# sourceMappingURL=imageGroup.js.map