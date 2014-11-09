/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private plane: objects.Plane;
        private island: objects.Island;
        private clouds = [];
        private scoreboard: objects.Scoreboard;

        constructor(plane: objects.Plane, island: objects.Island, clouds, scoreboard: objects.Scoreboard) {
            this.plane = plane;
            this.island = island;
            this.clouds = clouds;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
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

        // check collision between plane and any cloud object
        private planeAndCloud(cloud: objects.Cloud) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                cloud.reset();
            }
        }

        // check collision between plane and island
        private planeAndIsland() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = this.island.image.x;
            p2.y = this.island.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (this.island.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.island.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.planeAndCloud(this.clouds[count]);
            }
            this.planeAndIsland();
        }
    }
} 