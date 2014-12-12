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
///<reference path="../../js/createjs-lib.d.ts"/>
///<reference path="../../js/easeljs.d.ts"/>
///<reference path="../../js/preloadjs.d.ts"/>
///<reference path="../../js/soundjs.d.ts"/>
///<reference path="image.ts"/>
var objects;
(function (objects) {
    var RotatingGroup = (function (_super) {
        __extends(RotatingGroup, _super);
        function RotatingGroup(images) {
            _super.call(this);
            this.images = [];
            this.regX = 300;
            this.regY = 300;
            this.images = images;
            this.images[0].scaleX = .4;
            this.images[0].scaleY = .4;
            this.images[0].regX = this.images[0].width / 2;
            this.images[0].regY = this.images[0].height / 2;
            this.images[1].scaleX = .4;
            this.images[1].scaleY = .4;
            this.images[1].regX = this.images[1].width / 2;
            this.images[1].regY = this.images[1].height / 2;
            this.images[2].scaleX = .4;
            this.images[2].scaleY = .4;
            this.images[2].regX = this.images[2].width / 2;
            this.images[2].regY = this.images[2].height / 2;
            this.images[3].scaleX = .4;
            this.images[3].scaleY = .4;
            this.images[3].regX = this.images[3].width / 2;
            this.images[3].regY = this.images[3].height / 2;
            if (this.images.length == 3) {
                this.images[1].x = 300;
                this.images[2].x = 150;
                this.images[2].y = 300;
            }
            else if (this.images.length == 4) {
                this.images[1].x = 300;
                this.images[2].y = 300;
                this.images[3].x = 300;
                this.images[3].y = 300;
            }
            for (var idx = 0; idx <= this.images.length; idx++) {
                this.addChild(this.images[idx]);
            }
        }
        //Rotate the group
        RotatingGroup.prototype.rotate = function () {
            for (var idx = 0; idx < this.images.length; idx++) {
                this.images[idx].rotation += 1;
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