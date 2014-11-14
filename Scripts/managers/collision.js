/// <reference path="../objects/movingImage.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/character.ts" />
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
        Collision.prototype.rectIntersect = function (o1, o2, o1Width, o1Height, o2Width, o2Height) {
            return this.rangeIntersect(o1.x, o1.x + o1Width, o2.x, o2.x + o2Width) && this.rangeIntersect(o1.y, o1.y + o1Height, o2.y, o2.y + o2Height);
        };
        Collision.prototype.rangeIntersect = function (rangeAMin, rangeAMax, rangeBMin, rangeBMax) {
            return Math.max(rangeAMin, rangeAMax) >= Math.min(rangeBMin, rangeBMax) && Math.min(rangeAMin, rangeAMax) <= Math.max(rangeBMin, rangeBMax);
        };
        //Scale the objects and pass them through to the collision check method
        Collision.prototype.filter = function (o1, o2) {
            o1.scaleX = 0.8;
            o1.scaleY = 0.8;
            o2.scaleX = 0.8;
            o2.scaleY = 0.8;
            var o1Width = o1.width * 0.8;
            var o1Height = o1.height * 0.8;
            var o2Width = o2.width * 0.8;
            var o2Height = o2.height * 0.8;
            this.checkForCollision(o1, o2, o1Width, o1Height, o2Width, o2Height);
        };
        // check for collisions between two images (objects)
        Collision.prototype.checkForCollision = function (displayObject1, displayObject2, object1Width, object1Height, object2Width, object2Height) {
            var object1;
            var object2;
            object1 = displayObject1;
            object2 = displayObject2;
            if (this.rectIntersect(object1, object2, object1Width, object1Height, object2Width, object2Height)) {
                this.collisionHandlerCallback(displayObject1, displayObject2);
            }
        };
        // Utility Function to Check Collisions
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