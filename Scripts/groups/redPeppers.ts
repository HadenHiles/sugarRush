/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-11-12
 * Time: 6:12 PM
 * To change this template use File | Settings | File Templates.
 */
module groups{
    export class RedPeppers{
        stage: createjs.Stage;
        game: createjs.Container;
        redPeppers: createjs.Container;
        redPepper1: createjs.Sprite;
        dx: n
        constructor(stage: createjs.Stage, game: createjs.Container){
            this.stage = stage;
            this.game = game;
            this.redPeppers.regX = this.redPeppers.width / 2;
            this.redPeppers.regY = this.redPeppers.height / 2;
            this.redPepper1 = new createjs.Sprite(managers.Assets.veggies, "red-pepper");
            this.redPeppers.addChild(this.redPepper1);
            this.reset();
            game.addChild(this.redPeppers);
        }
        update() {
            this.redPeppers.x -= this.dx;
            this.redPeppers.rotation = this.redPeppers.rotation + 5;
            if (this.redPeppers.x <= 0) {
                this.reset();
            }
        }

        reset() {
            this.redPeppers.x = this.stage.canvas.width;
            this.redPeppers.y = 200;
        }

        destroy() {
            this.game.removeChild(this.redPeppers);
        }
    }
}
