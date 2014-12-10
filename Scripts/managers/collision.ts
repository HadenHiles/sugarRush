﻿/**
 *  File: collision.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is used to detect collisions between two display objects.
 *  It detects collisions between two rectangular display objects and applies
 *  a "filter" to make the game more playable (makes collision objects smaller than actual objects)
 */
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

        //Get the min and max values of 2 objects and pass them through the rangeIntersect method to determine if there is overlap
        public rectIntersect(objectA: any, objectB: any): boolean {
            var globalPointA = objectA.localToGlobal(objectA.x, objectA.y);
            var globalPointB = objectB.localToGlobal(objectB.x, objectB.y);
            return  this.rangeIntersect(globalPointA.x,globalPointA.x + objectA.width, globalPointB.x, globalPointB.x + objectB.width) &&
                    this.rangeIntersect(globalPointA.y, globalPointA.y + objectA.height, globalPointB.y, globalPointB.y + objectB.height);
        }

        //Determine whethere there is an overlap with the two display objects or not
        public rangeIntersect(rangeAMin: number, rangeAMax: number, rangeBMin: number, rangeBMax: number): boolean{
            return  Math.max(rangeAMin, rangeAMax) >= Math.min(rangeBMin, rangeBMax) &&
                    Math.min(rangeAMin, rangeAMax) <= Math.max(rangeBMin, rangeBMax);
        }

        //loop through both object collections and check for a collision with each item in a collection (ex. veggies)
        update() {
            // We need to fake the object dimensions to improve perceived collisions.
            var scaledObjectA = new filters.Scale();
            var scaledObjectB = new filters.Scale();
            for(var idx1 in this.displayObjectSet1) {
                for (var idx2 in this.displayObjectSet2) {
                    scaledObjectA.original = this.displayObjectSet1[idx1];
                    scaledObjectB.original = this.displayObjectSet2[idx2];
                    if (this.rectIntersect(scaledObjectA, scaledObjectB)) {
                        this.collisionHandlerCallback(scaledObjectA.original, scaledObjectB.original);
                    }
                }
            }
        }
    }
} 