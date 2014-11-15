/**
 *  File: collision.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is used to detect collisions between two display objects.
 *  It detects collisions between two rectangular display objects and applies
 *  a "filter" to make the game more playable (makes collision objects smaller than actual objects)
 */
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
        //Get the min and max values of 2 objects and pass them through the rangeIntersect method to determine if there is overlap
        Collision.prototype.rectIntersect = function (o1, o2, o1Width, o1Height, o2Width, o2Height) {
            return this.rangeIntersect(o1.x, o1.x + o1Width, o2.x, o2.x + o2Width) && this.rangeIntersect(o1.y, o1.y + o1Height, o2.y, o2.y + o2Height);
        };
        //Determine whethere there is an overlap with the two display objects or not
        Collision.prototype.rangeIntersect = function (rangeAMin, rangeAMax, rangeBMin, rangeBMax) {
            return Math.max(rangeAMin, rangeAMax) >= Math.min(rangeBMin, rangeBMax) && Math.min(rangeAMin, rangeAMax) <= Math.max(rangeBMin, rangeBMax);
        };
        //Scale the objects and pass them through to the collision check method ("goggles")
        Collision.prototype.filter = function (o1, o2) {
            o1.scaleX = 0.9;
            o1.scaleY = 0.95;
            o2.scaleX = 0.9;
            o2.scaleY = 0.95;
            var o1Width = o1.width * 0.9;
            var o1Height = o1.height * 0.95;
            var o2Width = o2.width * 0.9;
            var o2Height = o2.height * 0.95;
            this.checkForCollision(o1, o2, o1Width, o1Height, o2Width, o2Height);
        };
        //Check for collisions between two images (display objects)
        Collision.prototype.checkForCollision = function (displayObject1, displayObject2, object1Width, object1Height, object2Width, object2Height) {
            var object1;
            var object2;
            object1 = displayObject1;
            object2 = displayObject2;
            if (this.rectIntersect(object1, object2, object1Width, object1Height, object2Width, object2Height)) {
                this.collisionHandlerCallback(displayObject1, displayObject2);
            }
        };
        //loop through both object collections and check for a collision with each item in a collection (ex. veggies)
        Collision.prototype.update = function () {
            for (var idx1 in this.displayObjectSet1) {
                for (var idx2 in this.displayObjectSet2) {
                    this.filter(this.displayObjectSet1[idx1], this.displayObjectSet2[idx2]);
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map