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
        function Collision(convertPoints, displayObjectSet1, displayObjectSet2, collisionHandler) {
            // class variables
            this.displayObjectSet1 = [];
            this.displayObjectSet2 = [];
            if (convertPoints) {
                var object1x = displayObjectSet1.x;
                var object1y = displayObjectSet1.y;
                var object2x = displayObjectSet2.x;
                var object2y = displayObjectSet2.y;
                displayObjectSet2.globalToLocal(displayObjectSet2.x, displayObjectSet2.y);
            }
            this.displayObjectSet1 = displayObjectSet1;
            this.displayObjectSet2 = displayObjectSet2;
            this.collisionHandlerCallback = collisionHandler;
        }
        //Get the min and max values of 2 objects and pass them through the rangeIntersect method to determine if there is overlap
        Collision.prototype.rectIntersect = function (o1, o2) {
            return this.rangeIntersect(o1.x, o1.x + o1.width, o2.x, o2.x + o2.width) && this.rangeIntersect(o1.y, o1.y + o1.height, o2.y, o2.y + o2.height);
        };
        //Determine whethere there is an overlap with the two display objects or not
        Collision.prototype.rangeIntersect = function (rangeAMin, rangeAMax, rangeBMin, rangeBMax) {
            return Math.max(rangeAMin, rangeAMax) >= Math.min(rangeBMin, rangeBMax) && Math.min(rangeAMin, rangeAMax) <= Math.max(rangeBMin, rangeBMax);
        };
        //loop through both object collections and check for a collision with each item in a collection (ex. veggies)
        Collision.prototype.update = function () {
            // We need to fake the object dimensions to improve perceived collisions.
            var scaledObjectA = new filters.Scale();
            var scaledObjectB = new filters.Scale();
            for (var idx1 in this.displayObjectSet1) {
                for (var idx2 in this.displayObjectSet2) {
                    scaledObjectA.original = this.displayObjectSet1[idx1];
                    scaledObjectB.original = this.displayObjectSet2[idx2];
                    if (this.rectIntersect(scaledObjectA, scaledObjectB)) {
                        this.collisionHandlerCallback(scaledObjectA.original, scaledObjectB.original);
                    }
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map