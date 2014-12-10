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
    var RotatingGroup = (function (_super) {
        __extends(RotatingGroup, _super);
        function RotatingGroup(image, numberOfImages) {
            _super.call(this);
            for (var count = 1; count <= numberOfImages; count++) {
                this.images.push(image);
            }
            if (numberOfImages == 3) {
                this.images[1].x = 300;
                this.images[2].x = 150;
                this.images[2].y = 300;
            }
            else if (numberOfImages == 4) {
                this.images[1].x = 300;
                this.images[2].y = 300;
                this.images[3].x = 300;
                this.images[3].y = 300;
            }
            for (var count = 0; count <= this.images.length; count++) {
                this.addChild(this.images[count]);
            }
        }
        //Rotate the group
        RotatingGroup.prototype.rotate = function () {
            for (var count = 0; count <= this.images.length; count++) {
                this.images[count].rotation += 1;
            }
            this.rotation -= 1;
        };
        //Remove the images
        RotatingGroup.prototype.destroy = function () {
            this.removeAllChildren();
        };
        return RotatingGroup;
    })(createjs.Container);
    objects.RotatingGroup = RotatingGroup;
})(objects || (objects = {}));
//# sourceMappingURL=rotatingGroup.js.map