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
            Object.defineProperty(this, "parent", {
                get: function () {
                    return _this._image.parent;
                }
            });
            //Define the x coordinate
            Object.defineProperty(this, "x", {
                set: function (xValue) {
                    _this._image.x = xValue;
                    return _this.image.x;
                },
                get: function () {
                    return _this.image.x;
                }
            });
            //Define the y coordinate
            Object.defineProperty(this, "y", {
                set: function (yValue) {
                    _this._image.y = yValue;
                    return _this.image.y;
                },
                get: function () {
                    return _this.image.y;
                }
            });
            //Define the width of the image
            Object.defineProperty(this, "height", {
                set: function (heightValue) {
                    _this.height = heightValue;
                    return _this.height;
                },
                get: function () {
                    return _this.image.getTransformedBounds().height;
                }
            });
            //Define the height of the image
            Object.defineProperty(this, "width", {
                set: function (widthValue) {
                    _this.width = widthValue;
                    return _this.width;
                },
                get: function () {
                    return _this.image.getTransformedBounds().width;
                }
            });
            Object.defineProperty(this, "scaleX", {
                set: function (scaleXValue) {
                    _this.image.scaleX = scaleXValue;
                    return _this.image.scaleX;
                },
                get: function () {
                    return _this.image.scaleX;
                }
            });
            Object.defineProperty(this, "scaleY", {
                set: function (scaleYValue) {
                    _this.image.scaleY = scaleYValue;
                    return _this.image.scaleY;
                },
                get: function () {
                    return _this.image.scaleY;
                }
            });
            Object.defineProperty(this, "regX", {
                set: function (regXValue) {
                    _this.image.regX = regXValue;
                    return _this.image.regX;
                },
                get: function () {
                    return _this.image.regX;
                }
            });
            Object.defineProperty(this, "regY", {
                set: function (regYValue) {
                    _this.image.regY = regYValue;
                    return _this.image.regY;
                },
                get: function () {
                    return _this._image.regY;
                }
            });
            Object.defineProperty(this, "rotation", {
                set: function (rotationValue) {
                    _this._image.rotation = rotationValue;
                    return _this._image.rotation;
                },
                get: function () {
                    return _this._image.rotation;
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
            return this.image.localToGlobal(x, y);
        };
        Image.prototype.getTransformedBounds = function () {
            return this.image.getTransformedBounds();
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