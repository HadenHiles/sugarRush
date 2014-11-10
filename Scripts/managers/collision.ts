/// <reference path="../objects/cloud.ts" />
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
        private distanceBetween(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check for collisions between two images
        private checkForCollision(displayObject1, displayObject2) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = displayObject1.x;
            p1.y = displayObject1.y;
            p2.x = displayObject2.x;
            p2.y = displayObject2.y;
            if (this.distanceBetween(p1, p2) < ((displayObject1.height / 2) + (displayObject2.height / 2))) {
                this.collisionHandlerCallback(displayObject1, displayObject2);
//                createjs.Sound.play("thunder");
//                this.scoreboard.lives -= 1;
//                cloud.reset();
            }
        }

//        // check islandCollisionManager between plane and island
//        private planeAndIsland() {
//            var p1: createjs.Point = new createjs.Point();
//            var p2: createjs.Point = new createjs.Point();
//            p1.x = this.plane.image.x;
//            p1.y = this.plane.image.y;
//            p2.x = this.island.image.x;
//            p2.y = this.island.image.y;
//            if (this.distanceBetween(p1, p2) < ((this.plane.height / 2) + (this.island.height / 2))) {
//                createjs.Sound.play("yay");
//                this.scoreboard.score += 100;
//                this.island.reset();
//            }
//        }

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