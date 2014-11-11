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
                    return this.image.getTransformedBounds().height;                }
            });
            Object.defineProperty(this, "width",{
                get: () => {
                    return this.image.getTransformedBounds().width;
                }
            });

            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "plane");
            this.image.y = 130;
            this.image.rotation += 90;
            this.image.regX = this.image.getTransformedBounds().width / 2;
            this.image.regY = this.image.getTransformedBounds().height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }


        update() {
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
        }
        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
    }

}