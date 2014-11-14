/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-11-12
 * Time: 10:53 PM
 * To change this template use File | Settings | File Templates.
 */
module managers {
    // Collision Manager Class
    export class ObstacleManager {
        // class variables
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
            if (this.tickCount++ > 0 && this.tickCount % 60 == 0){
                var randomAnimationIdx:number = Math.floor(Math.random() * (this.spriteSheet._animations.length + 1));
                var image:createjs.Sprite = new createjs.Sprite(this.spriteSheet, this.spriteSheet._animations[randomAnimationIdx])
                var o:objects.MovingImage = new objects.MovingImage(stage, game, image);
                this.displayObjectsCreated++;
                this.newDisplayObjectCallback(o);
                this.tickCount = 0;
            }
            //Only allow a max of 5 display objects to be on the stage at any given time
            if (this.displayObjectsCreated > 20) {
                createjs.Ticker.removeEventListener("tick", this.addDisplayObjectProxy);
            }
        }
        destroy() {
            createjs.Ticker.removeEventListener("tick", this.addDisplayObjectProxy);
        }
    }
}