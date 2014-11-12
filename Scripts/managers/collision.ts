﻿﻿﻿﻿/// <reference path="../objects/movingImage.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
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
        public rectIntersect(p1: any, p2: any): boolean {
            return  this.rangeIntersect(p1.x, p1.x + p1.width, p2.x, p2.x + p2.width) &&
                    this.rangeIntersect(p1.y, p1.y + p1.height, p2.y, p2.y + p2.height);
        }

        public rangeIntersect(rangeAMin: number, rangeAMax: number, rangeBMin: number, rangeBMax: number): boolean{
            return  Math.max(rangeAMin, rangeAMax) >= Math.min(rangeBMin, rangeBMax) &&
                    Math.min(rangeAMin, rangeAMax) <= Math.max(rangeBMin, rangeBMax);
        }

        // check for collisions between two images (objects)
        private checkForCollision(displayObject1, displayObject2) {
            var object1: any;
            var object2: any;
            object1 = displayObject1;
            object2 = displayObject2;
            if (this.rectIntersect(object1, object2)) {
                this.collisionHandlerCallback(displayObject1, displayObject2);
            }
        }

        // Utility Function to Check Collisions
        update() {
            for(var idx1 in this.displayObjectSet1) {
                for (var idx2 in this.displayObjectSet2) {
                    this.checkForCollision(this.displayObjectSet1[idx1], this.displayObjectSet2[idx2]);
                }
            }
        }
    }
} 