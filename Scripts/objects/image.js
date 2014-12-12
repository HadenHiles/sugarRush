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
///<reference path="../../js/createjs-lib.d.ts"/>
///<reference path="../../js/easeljs.d.ts"/>
///<reference path="../../js/preloadjs.d.ts"/>
///<reference path="../../js/soundjs.d.ts"/>
///<reference path="../managers/asset.ts"/>
var objects;
(function (objects) {
    // Character Class
    var Image = (function () {
        function Image(stage, game, image) {
            var _this = this;
            //Define the x coordinate
            Object.defineProperty(this, "x", {
                get: function () {
                    return _this._image.x;
                }
            });
            //Define the y coordinate
            Object.defineProperty(this, "y", {
                get: function () {
                    return _this._image.y;
                }
            });
            Object.defineProperty(this, "regX", {
                set: function (regXValue) {
                    _this._image.regX = regXValue;
                    return _this._image.regX;
                },
                get: function () {
                    return _this._image.regX;
                }
            });
            Object.defineProperty(this, "regY", {
                set: function (regYValue) {
                    _this._image.regY = regYValue;
                    return _this._image.regY;
                },
                get: function () {
                    return _this._image.regY;
                }
            });
            Object.defineProperty(this, "scaleX", {
                set: function (scaleXValue) {
                    _this._image.scaleX = scaleXValue;
                    return _this._image.scaleX;
                },
                get: function () {
                    return _this._image.scaleX;
                }
            });
            Object.defineProperty(this, "scaleY", {
                set: function (scaleYValue) {
                    _this._image.scaleY = scaleYValue;
                    return _this._image.scaleY;
                },
                get: function () {
                    return _this._image.scaleY;
                }
            });
            //Define the width of the image
            Object.defineProperty(this, "height", {
                get: function () {
                    return _this._image.getTransformedBounds().height;
                }
            });
            //Define the height of the image
            Object.defineProperty(this, "width", {
                get: function () {
                    return _this._image.getTransformedBounds().width;
                }
            });
            Object.defineProperty(this, "image", {
                set: function (image) {
                    stage.removeChild(_this._image);
                    _this._image = image;
                    stage.addChild(_this._image);
                },
                get: function () {
                    return _this._image;
                }
            });
            this.stage = stage;
            this.game = game;
            this._image = image;
            if (!image) {
                this._image = new createjs.Sprite(managers.Assets.candy, managers.Assets.candy[0]);
            }
            game.addChild(this._image);
        }
        //Update the position of the character according to the mouse position
        Image.prototype.update = function () {
            this.moveImage();
        };
        Image.prototype.moveImage = function () {
        };
        Image.prototype.localToGlobal = function (x, y) {
            return this._image.localToGlobal(x, y);
        };
        //remove the character
        Image.prototype.destroy = function () {
            this.game.removeChild(this._image);
        };
        return Image;
    })();
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map