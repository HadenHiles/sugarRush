﻿﻿﻿﻿/// <reference path="../objects/movingImage.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/character.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private displayObjectSet1 = [];
        private displayObjectSet2 = [];
        public collisionHandlerCallback: (displayObject1: any, dispalyObject2: any) => void;
        constructor(displayObjectSet1, displayObjectSet2, collisionHandler: (displayObject1: any, displayObject2: any)=>void) {
            this.displayObjectSet1 = displayObjectSet1;
            this.displayObjectSet2 = displayObjectSet2;
            this.collisionHandlerCallback = collisionHandler;
        }

        // Utility method - Distance calculation between two points
        public rectIntersect(o1: any, o2: any, o1Width: number, o1Height: number, o2Width: number, o2Height: number): boolean {
            return  this.rangeIntersect(o1.x, o1.x + o1Width, o2.x, o2.x + o2Width) &&
                    this.rangeIntersect(o1.y, o1.y + o1Height, o2.y, o2.y + o2Height);
        }

        public rangeIntersect(rangeAMin: number, rangeAMax: number, rangeBMin: number, rangeBMax: number): boolean{
            return  Math.max(rangeAMin, rangeAMax) >= Math.min(rangeBMin, rangeBMax) &&
                    Math.min(rangeAMin, rangeAMax) <= Math.max(rangeBMin, rangeBMax);
        }

        //Scale the objects and pass them through to the collision check method
        private filter(o1: any, o2: any){
            o1.scaleX = 0.8;
            o1.scaleY = 0.8;
            o2.scaleX = 0.8;
            o2.scaleY = 0.8;
            var o1Width:number = o1.width * 0.8;
            var o1Height:number = o1.height * 0.8;
            var o2Width:number = o2.width * 0.8;
            var o2Height:number = o2.height * 0.8;
            this.checkForCollision(o1, o2, o1Width, o1Height, o2Width, o2Height);
        }

        // check for collisions between two images (objects)
        private checkForCollision(displayObject1, displayObject2, object1Width, object1Height, object2Width, object2Height) {
            var object1: any;
            var object2: any;
            object1 = displayObject1;
            object2 = displayObject2;
            if (this.rectIntersect(object1, object2, object1Width, object1Height, object2Width, object2Height)) {
                this.collisionHandlerCallback(displayObject1, displayObject2);
            }
        }

        // Utility Function to Check Collisions
        update() {
            for(var idx1 in this.displayObjectSet1) {
                for (var idx2 in this.displayObjectSet2) {
                    this.filter(this.displayObjectSet1[idx1], this.displayObjectSet2[idx2]);
                }
            }
        }
    }
} 