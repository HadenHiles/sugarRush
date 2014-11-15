/**
 *  File: ObstacleManager.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is responsible for controlling, when and
 *  how many obstacles to place on the screen at any given time
 */
module managers {
    // Collision Manager Class
    export class ObstacleManager {
        //Class variables
        private stage: createjs.Stage;
        private game: createjs.Container;
        private spriteSheet: createjs.SpriteSheet;
        private newDisplayObjectCallback: (object) => void;
        private displayObjectsCreated: number = 0;
        private tickCount: number = 0;
        addDisplayObjectProxy: (tickEvent) => void;

        constructor(stage, game, spriteSheet : createjs.SpriteSheet, newDisplayObjectCallback: (object) => void) {
            this.stage = stage;
            this.game = game;
            this.spriteSheet = spriteSheet;
            this.newDisplayObjectCallback = newDisplayObjectCallback;
            this.addDisplayObjectProxy = (tickEvent) => {
                this.addDisplayObject.apply(this, tickEvent);
            }
            createjs.Ticker.addEventListener("tick", this.addDisplayObjectProxy);
        }

        //Control the number of display objects that are added to the screen
        private addDisplayObject(tickEvent) {
            //Gather random sprites from the veggies spritesheet
            if (this.tickCount++ > 0 && this.tickCount % 60 == 0){
                var randomAnimationIdx:number = Math.floor(Math.random() * (this.spriteSheet._animations.length + 1));
                var image:createjs.Sprite = new createjs.Sprite(this.spriteSheet, this.spriteSheet._animations[randomAnimationIdx]);
                var o:objects.MovingImage = new objects.MovingImage(stage, game, image);
                this.displayObjectsCreated++;
                this.newDisplayObjectCallback(o);
                this.tickCount = 0;
            }
            //Only allow a max of 20 display objects to be on the stage at any given time
            if (this.displayObjectsCreated > 20) {
                createjs.Ticker.removeEventListener("tick", this.addDisplayObjectProxy);
            }
        }
        //Stop adding obstacles to the game
        destroy() {
            createjs.Ticker.removeEventListener("tick", this.addDisplayObjectProxy);
        }
    }
}