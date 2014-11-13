/// <reference path="../managers/asset.ts" />
module objects {
    // Island Class
    export class Island {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        dx: number;
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
            this.image = new createjs.Sprite(managers.Assets.atlas, "candy");
            this.image.scaleX = .7;
            this.image.scaleY = .7;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 4;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width;
        }

        destroy() {
            game.removeChild(this.image);
        }
   }

}