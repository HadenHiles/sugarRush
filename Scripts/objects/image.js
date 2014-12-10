/**
 *  File: character.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is where the main character is created and moved
 *  around the screen according to the user's mouse position
 *  on the canvas
 */
var objects;
(function (objects) {
    // Character Class
    var Image = (function () {
        function Image(stage, game, image) {
            var _this = this;
            //Define the x coordinate
            Object.defineProperty(this, "x", {
                get: function () {
                    return _this.image.x;
                }
            });
            //Define the y coordinate
            Object.defineProperty(this, "y", {
                get: function () {
                    return _this.image.y;
                }
            });
            //Define the width of the image
            Object.defineProperty(this, "height", {
                get: function () {
                    return _this.image.getTransformedBounds().height;
                }
            });
            //Define the height of the image
            Object.defineProperty(this, "width", {
                get: function () {
                    return _this.image.getTransformedBounds().width;
                }
            });
            this.stage = stage;
            this.game = game;
            this.image = image;
            game.addChild(this.image);
        }
        //Update the position of the character according to the mouse position
        Image.prototype.update = function () {
            this.moveImage();
        };
        Image.prototype.moveImage = function () {
        };
        Image.prototype.localToGlobal = function (x, y) {
            return this.image.localToGlobal(x, y);
        };
        //remove the character
        Image.prototype.destroy = function () {
            this.game.removeChild(this.image);
        };
        return Image;
    })();
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map