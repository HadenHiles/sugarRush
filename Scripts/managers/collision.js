/// <reference path="../objects/movingImage.ts" />
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
        Collision.prototype.rectIntersect = function (p1, p2) {
            return this.rangeIntersect(p1.x, p1.x + p1.width, p2.x, p2.x + p2.width) && this.rangeIntersect(p1.y, p1.y + p1.height, p2.y, p2.y + p2.height);
        };
        Collision.prototype.rangeIntersect = function (rangeAMin, rangeAMax, rangeBMin, rangeBMax) {
            return Math.max(rangeAMin, rangeAMax) >= Math.min(rangeBMin, rangeBMax) && Math.min(rangeAMin, rangeAMax) <= Math.max(rangeBMin, rangeBMax);
        };
        // check for collisions between two images (objects)
        Collision.prototype.checkForCollision = function (displayObject1, displayObject2) {
            var object1;
            var object2;
            object1 = displayObject1;
            object2 = displayObject2;
            if (this.rectIntersect(object1, object2)) {
                this.collisionHandlerCallback(displayObject1, displayObject2);
            }
        };
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