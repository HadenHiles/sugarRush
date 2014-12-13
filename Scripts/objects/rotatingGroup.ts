/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-11-30
 * Time: 12:09 PM
 * To change this template use File | Settings | File Templates.
 */
///<reference path="../../js/createjs-lib.d.ts"/>
///<reference path="../../js/easeljs.d.ts"/>
///<reference path="../../js/preloadjs.d.ts"/>
///<reference path="../../js/soundjs.d.ts"/>
///<reference path="image.ts"/>
module objects {
    export class RotatingGroup extends createjs.Container {
        images:createjs.Sprite[] = [];
        dx: number;
        constructor(images: createjs.Sprite[]) {
            super();
            this.x = 400;
            this.y = 200;
            this.regX = 100;
            this.regY = 100;

            this.images = images;
            this.images[0].scaleX = .3;
            this.images[0].scaleY = .3;
            this.images[0].regX = this.images[0].width / 2;
            this.images[0].regY = this.images[0].height / 2;
            this.images[1].scaleX = .3;
            this.images[1].scaleY = .3;
            this.images[1].regX = this.images[1].width / 2;
            this.images[1].regY = this.images[1].height / 2;
            this.images[2].scaleX = .3;
            this.images[2].scaleY = .3;
            this.images[2].regX = this.images[2].width / 2;
            this.images[2].regY = this.images[2].height / 2;
            this.images[3].scaleX = .3;
            this.images[3].scaleY = .3;
            this.images[3].regX = this.images[3].width / 2;
            this.images[3].regY = this.images[3].height / 2;
            if(this.images.length == 3) {
                this.images[1].x = 250;
                this.images[2].x = 100;
                this.images[2].y = 250;
            } else if(this.images.length == 4) {
                this.images[1].x = 250;
                this.images[2].y = 250;
                this.images[3].x = 250;
                this.images[3].y = 250;
            }
            for(var idx = 0; idx < this.images.length; idx++) {
                this.addChild(this.images[idx]);
            }
        }

        //Rotate the group
        rotate() {
            for(var idx = 0; idx < this.images.length; idx++) {
                this.images[idx].rotation += 1;
                console.log(this.images[idx].height + " " + this.images[idx].width + "\n");
            }
            this.rotation -= 1;
        }

        //Remove the images
        destroy() {
            this.removeAllChildren();
        }
    }
}
