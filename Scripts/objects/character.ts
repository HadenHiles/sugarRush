﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Plane Class
    export class Plane {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            Object.defineProperty(this, "x",{
                get: () => {
                    return this.image.x;
                }
            });
            Object.defineProperty(this, "y",{
                get: () => {
                    return this.image.y;
                }
            });
            Object.defineProperty(this, "height",{
                get: () => {
                    return this.image.getTransformedBounds().height;
                }
            });
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