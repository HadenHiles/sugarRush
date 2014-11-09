/// <reference path="../managers/asset.ts" />
module objects {
    // Cloud class
    export class Cloud {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "cloud");
            this.image.x = 480;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            this.image.y += this.dy;
            this.image.x += this.dx;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.image.x = -this.width;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}