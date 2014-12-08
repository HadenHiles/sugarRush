var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-11-30
 * Time: 12:09 PM
 * To change this template use File | Settings | File Templates.
 */
var objects;
(function (objects) {
    var ImageGroup = (function (_super) {
        __extends(ImageGroup, _super);
        function ImageGroup(groupKind) {
            _super.call(this);
            //            var bounds = this.getBounds();
            //            bounds.width = 500;
            //            bounds.height = 500;
            //            this.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
            //            this.regX = bounds.width / 2;
            //            this.regY = bounds.height / 2;
            this.groupKind = groupKind;
            this.image = new createjs.Sprite(managers.Assets.veggies, "red-pepper");
            this.image2 = new createjs.Sprite(managers.Assets.veggies, "red-pepper");
            this.image3 = new createjs.Sprite(managers.Assets.veggies, "red-pepper");
            this.image4 = new createjs.Sprite(managers.Assets.veggies, "red-pepper");
            this.image.scaleX = 0.3;
            this.image.scaleY = 0.3;
            this.image2.scaleX = 0.3;
            this.image2.scaleY = 0.3;
            this.image3.scaleX = 0.3;
            this.image3.scaleY = 0.3;
            this.image4.scaleX = 0.3;
            this.image4.scaleY = 0.3;
            this.image2.x += 250;
            this.image3.y += 250;
            this.image4.x += 250;
            this.image4.y += 250;
            this.regX = 145;
            this.regY = 145;
            this.reset();
            this.addChild(this.image, this.image2, this.image3, this.image4);
        }
        //Move the group on the x and y axis
        ImageGroup.prototype.update = function () {
            this.image.rotation += 1;
            this.image2.rotation += 1;
            this.image3.rotation += 1;
            this.image4.rotation += 1;
            this.y += this.dy;
            this.x -= this.dx;
            this.rotation -= 1;
            if (this.x <= 0) {
                this.reset();
            }
        };
        //Reset the positioning of the moving image to be at a random coordinate off to the right of the screen
        ImageGroup.prototype.reset = function () {
            this.y = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
            this.dx = Math.floor(Math.random() * 4 + 4);
            this.dy = Math.floor(Math.random() * 3);
            this.x = 880 * 1.25;
        };
        //Remove the image
        ImageGroup.prototype.destroy = function () {
            this.removeAllChildren();
        };
        return ImageGroup;
    })(createjs.Container);
    objects.ImageGroup = ImageGroup;
})(objects || (objects = {}));
//# sourceMappingURL=imageGroup.js.map