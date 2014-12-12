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
            //Define the x coordinate
            Object.defineProperty(this, "x",{
                get: () => {
                    return this._image.x;
                }
            });
            //Define the y coordinate
            Object.defineProperty(this, "y",{
                get: () => {
                    return this._image.y;
                }
            });
            Object.defineProperty(this, "regX", {
                set: (regXValue) => {
                    this._image.regX = regXValue;
                    return this._image.regX;
                },
                get: () => {
                    return this._image.regX;
                }
            });
            Object.defineProperty(this, "regY", {
                set: (regYValue) => {
                    this._image.regY = regYValue;
                    return this._image.regY;
                },
                get: () => {
                    return this._image.regY;
                }
            });
            Object.defineProperty(this, "scaleX", {
                set: (scaleXValue) => {
                    this._image.scaleX = scaleXValue;
                    return this._image.scaleX;
                },
                get: () => {
                    return this._image.scaleX;
                }
            });
            Object.defineProperty(this, "scaleY", {
                set: (scaleYValue) => {
                    this._image.scaleY = scaleYValue;
                    return this._image.scaleY;
                },
                get: () => {
                    return this._image.scaleY;
                }
            });
            //Define the width of the image
            Object.defineProperty(this, "height",{
                get: () => {
                    return this._image.getTransformedBounds().height;
                }
            });
            //Define the height of the image
            Object.defineProperty(this, "width",{
                get: () => {
                    return this._image.getTransformedBounds().width;
                }
            });
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
            return this._image.localToGlobal(x, y);
        }

        //remove the character
        destroy() {
            this.game.removeChild(this._image);
        }
    }

}