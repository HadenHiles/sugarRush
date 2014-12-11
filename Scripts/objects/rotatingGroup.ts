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
module objects {
    export class RotatingGroup extends createjs.Container {
        images:createjs.Sprite[] = [];
        dx: number;
        constructor(image: createjs.Sprite, numberOfImages: Number) {
            super();
            this.images.push(image);
            for(var count = 1; count <= numberOfImages; count++) {
                this.images.push(image);
            }
            if(numberOfImages == 3) {
                this.images[1].x = 300;
                this.images[2].x = 150;
                this.images[2].y = 300;
            } else if(numberOfImages == 4) {
                this.images[1].x = 300;
                this.images[2].y = 300;
                this.images[3].x = 300;
                this.images[3].y = 300;
            }
            for(var count = 0; count <= this.images.length; count++) {
                this.addChild(this.images[count]);
            }
        }

        //Rotate the group
        rotate() {
            for(var count = 0; count <= this.images.length; count++) {
                this.images[count].rotation += 1;
            }
            this.rotation -= 1;
        }

        //Remove the images
        destroy() {
            this.removeAllChildren();
        }
    }
}
