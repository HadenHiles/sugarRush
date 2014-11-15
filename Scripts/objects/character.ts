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
    export class Character {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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
            this.image = new createjs.Sprite(managers.Assets.atlas, "candy-craver");
            this.image.scaleX = .5;
            this.image.scaleY = .5;
            this.image.regX = 30;
            this.image.regY = 53;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('candypump', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }

        //Update the position of the character according to the mouse position
        update() {
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
        }

        //remove the character
        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
    }

}