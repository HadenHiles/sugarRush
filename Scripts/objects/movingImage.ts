/**
 *  File: movingImage.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is responsible for taking in a spritesheet, generating
 *  an image/display object, and then moving it on the screen in various directions.
 */
module objects {
    // MovingImage class
    export class MovingImage {
        //Class Variables
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        dy: number;
        dx: number;
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
                    return this.image.getTransformedBounds().height;                }
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
            this.image.x = this.stage.canvas.width;
            //Scale relative to the collision/registration point
            this.image.scaleX = .3;
            this.image.scaleY = .3;
            //Set collision/registraion point to be in the center of the object
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.image.rotation = this.image.rotation - Math.floor(Math.random() * (90 + 1)) + 1;
//            this.image.rotation *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
            this.reset();

            game.addChild(this.image);
        }

        //Move the images on the x and y axis
        update() {
            this.image.y += this.dy;
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        }

        //Reset the positioning of the moving image to be at a random coordinate off to the right of the screen
        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 4 + 4);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = this.stage.canvas.width * 1.25;
        }

        //Remove the image
        destroy() {
            this.game.removeChild(this.image);
        }
   }

}