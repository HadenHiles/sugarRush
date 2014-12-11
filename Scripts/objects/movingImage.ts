/**
 *  File: movingImage.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is responsible for taking in a spritesheet, generating
 *  an image/display object, and then moving it on the screen in various directions.
 */
///<reference path="image.ts"/>
///<reference path="../../js/createjs-lib.d.ts"/>
///<reference path="../../js/easeljs.d.ts"/>
///<reference path="../../js/preloadjs.d.ts"/>
///<reference path="../../js/soundjs.d.ts"/>
module objects {
    // MovingImage class
    export class MovingImage extends objects.Image {
        //Class Variables
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container, image: createjs.Sprite) {
            super(stage, game, image);

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