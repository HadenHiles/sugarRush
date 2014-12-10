﻿/**
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
    export class Character extends objects.Image{
        soundTrack: createjs.SoundInstance;
        line: createjs.Shape;
        linePosX: number;
        linePosY: number;
        lineColor: String;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super(stage, game, new createjs.Sprite(managers.Assets.atlas, "candy-craver"));
            this.line = new createjs.Shape();
//            this.lineColor = createjs.Graphics.getRGB(0xFFFFFF * Math.random(), 1);
            this.lineColor = createjs.Graphics.getRGB(166, 214, 231);
            this.line.graphics.setStrokeStyle(8, "round", "round");
            game.addChild(this.line);
            this.image.x = 100;
            this.image.y = 220;
            this.image.scaleX = .5;
            this.image.scaleY = .5;
            this.image.regX = 30;
            this.image.regY = 53;
            this.soundTrack = createjs.Sound.play('candypump', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }

        //Update the position of the character according to the mouse position
        update() {
            this.linePosX = this.image.x;
            this.linePosY = this.image.y;
            this.line.graphics.beginStroke(this.lineColor);
            this.line.graphics.moveTo(this.linePosX - 15, this.linePosY);
            this.line.graphics.lineTo(this.image.x - 15, this.image.y);
            this.line.graphics.endStroke();
//            super.update();
        }

        moveImage() {
            var speed = 7;
            if (this.image.x < this.stage.mouseX + speed) {
                this.image.x += speed;
            }
            if (this.image.x > this.stage.mouseX - speed) {
                this.image.x -= speed;
            }
            if (this.image.y < this.stage.mouseY + speed) {
                this.image.y += speed;
            }
            if (this.image.y > this.stage.mouseY - speed) {
                this.image.y -= speed;
            }
        }

        //remove the character
        destroy() {
            this.soundTrack.stop();
            this.game.removeChild(this.line);
//            super.destroy();
        }
    }

}