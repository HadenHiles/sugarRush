﻿module objects {
    // Cloud class
    export class Cloud {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        dy: number;
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
            this.image = new createjs.Sprite(managers.Assets.veggies, "red-pepper");
            this.image.scaleX = .4;
            this.image.scaleY = .4;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            this.image.y += this.dy;
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 4 + 4);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = this.stage.canvas.width;
        }

        destroy() {
            game.removeChild(this.image);
        }
   }

}