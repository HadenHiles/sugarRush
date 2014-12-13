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
module objects {
    // Character Class
    export class Image {
        stage: createjs.Stage;
        game: createjs.Container;
        _image: createjs.Sprite;

        constructor(stage: createjs.Stage, game: createjs.Container, image: createjs.Sprite) {
            Object.defineProperty(this, "image", {
                set: (image) => {
                    stage.removeChild(this._image);
                    this._image = image;
                    stage.addChild(this._image);
                },
                get: () => {
                    return this._image;
                }
            });
            Object.defineProperty(this, "parent", {
                get: () => {
                    return this._image.parent;
                }
            });
            //Define the x coordinate
            Object.defineProperty(this, "x",{
                set: (xValue) => {
                    this._image.x = xValue;
                    return this.image.x;
                },
                get: () => {
                    return this.image.x;
                }
            });
            //Define the y coordinate
            Object.defineProperty(this, "y",{
                set: (yValue) => {
                    this._image.y = yValue;
                    return this.image.y;
                },
                get: () => {
                    return this.image.y;
                }
            });
            //Define the width of the image
            Object.defineProperty(this, "height",{
                set: (heightValue) => {
                    this.height = heightValue;
                    return this.height;
                },
                get: () => {
                    return this.image.getTransformedBounds().height;
                }
            });
            //Define the height of the image
            Object.defineProperty(this, "width",{
                set: (widthValue) => {
                    this.width = widthValue;
                    return this.width;
                },
                get: () => {
                    return this.image.getTransformedBounds().width;
                }
            });
            Object.defineProperty(this, "scaleX", {
                set: (scaleXValue) => {
                    this.image.scaleX = scaleXValue;
                    return this.image.scaleX;
                },
                get: () => {
                    return this.image.scaleX;
                }
            });
            Object.defineProperty(this, "scaleY", {
                set: (scaleYValue) => {
                    this.image.scaleY = scaleYValue;
                    return this.image.scaleY;
                },
                get: () => {
                    return this.image.scaleY;
                }
            });
            Object.defineProperty(this, "regX", {
                set: (regXValue) => {
                    this.image.regX = regXValue;
                    return this.image.regX;
                },
                get: () => {
                    return this.image.regX;
                }
            });
            Object.defineProperty(this, "regY", {
                set: (regYValue) => {
                    this.image.regY = regYValue;
                    return this.image.regY;
                },
                get: () => {
                    return this._image.regY;
                }
            });
            Object.defineProperty(this, "rotation", {
                set: (rotationValue) => {
                    this._image.rotation = rotationValue;
                    return this._image.rotation;
                },
                get: () => {
                    return this._image.rotation;
                }
            });

            this.stage = stage;
            this.game = game;
            this._image = image;
            if(!image) {
                this._image = new createjs.Sprite(managers.Assets.candy, managers.Assets.candy[0]);
            }
            game.addChild(this._image);
        }

        //Update the position of the character according to the mouse position
        update() {
            this.moveImage();
        }

        moveImage() {
        }

        localToGlobal(x: number, y: number): createjs.Point{
            return this.image.localToGlobal(x, y);
        }

        getTransformedBounds() {
            return this.image.getTransformedBounds();
        }

        //remove the character
        destroy() {
            this.game.removeChild(this._image);
        }
    }

}