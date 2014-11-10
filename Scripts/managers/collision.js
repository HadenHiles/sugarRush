/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(displayObjectSet1, displayObjectSet2, collisionHandler) {
            // class variables
            this.displayObjectSet1 = [];
            this.displayObjectSet2 = [];
            this.displayObjectSet1 = displayObjectSet1;
            this.displayObjectSet2 = displayObjectSet2;
            this.collisionHandlerCallback = collisionHandler;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distanceBetween = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check for collisions between two images
        Collision.prototype.checkForCollision = function (displayObject1, displayObject2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = displayObject1.x;
            p1.y = displayObject1.y;
            p2.x = displayObject2.x;
            p2.y = displayObject2.y;
            if (this.distanceBetween(p1, p2) < ((displayObject1.height / 2) + (displayObject2.height / 2))) {
                this.collisionHandlerCallback(displayObject1, displayObject2);
            }
        };
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
        Collision.prototype.update = function () {
            for (var idx1 in this.displayObjectSet1) {
                for (var idx2 in this.displayObjectSet2) {
                    this.checkForCollision(this.displayObjectSet1[idx1], this.displayObjectSet2[idx2]);
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map