/// <reference path="../managers/asset.ts" />
module objects {
    // Island Class
    export class Island {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "island");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }

        update() {
            this.image.y += this.dy;
            if (this.image.y > this.stage.canvas.height + this.height) {
                this.reset();
            }
        }

        reset() {
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
            this.image.y = -this.height;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}