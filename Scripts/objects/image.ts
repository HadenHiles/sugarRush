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
module objects {
    // Character Class
    export class Image {
        stage: createjs.Stage;
        game: createjs.Container;
        image: createjs.Sprite;
        constructor(stage: createjs.Stage, game: createjs.Container, image: createjs.Sprite) {
            //Define the x coordinate
            Object.defineProperty(this, "x",{
                get: () => {
                    return this.image.x;
                }
            });
            //Define the y coordinate
            Object.defineProperty(this, "y",{
                get: () => {
                    return this.image.y;
                }
            });
            //Define the width of the image
            Object.defineProperty(this, "height",{
                get: () => {
                    return this.image.getTransformedBounds().height;
                }
            });
            //Define the height of the image
            Object.defineProperty(this, "width",{
                get: () => {
                    return this.image.getTransformedBounds().width;
                }
            });

            this.stage = stage;
            this.game = game;
            this.image = image;
            game.addChild(this.image)
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

        //remove the character
        destroy() {
            this.game.removeChild(this.image);
        }
    }

}