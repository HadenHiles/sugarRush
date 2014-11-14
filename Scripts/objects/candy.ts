/// <reference path="../managers/asset.ts" />
module objects {
    // Candy Class
    export class Candy {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        dx: number;
        randomAnimationIdx: number;
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
            this.reset();

            this.dx = 4;
        }
        update() {
            this.image.x -= this.dx;
            this.randomAnimationIdx = Math.floor(Math.random() * (managers.Assets.candy._animations.length + 1));
            if (this.image.x <= 0) {
                this.reset();
            }
        }

        reset() {
            game.removeChild(this.image);
            this.image = new createjs.Sprite(managers.Assets.candy, managers.Assets.candy._animations[this.randomAnimationIdx]);
            this.image.scaleX = .7;
            this.image.scaleY = .7;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width;
            game.addChild(this.image);
        }

        destroy() {
            game.removeChild(this.image);
        }
   }

}