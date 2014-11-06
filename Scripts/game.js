/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-11-05
 * Time: 9:50 PM
 * To change this template use File | Settings | File Templates.
 */
var stage;
var queue;

// Game Objects
var plane;
var island;
var ocean;
var scoreboard;

// Cloud Array
var clouds = [];

// Game Constants
var CLOUD_NUM = 3;
var GAME_FONT = "40px Consolas";
var FONT_COLOUR = "#FFFF00";
var PLAYER_LIVES = 3;

function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "plane", src: "images/plane.png" },
        { id: "island", src: "images/island.png" },
        { id: "cloud", src: "images/cloud.png" },
        { id: "ocean", src: "images/ocean.gif" },
        { id: "yay", src: "sounds/yay.ogg" },
        { id: "thunder", src: "sounds/thunder.ogg" },
        { id: "engine", src: "sounds/engine.ogg" }
    ]);
}

function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    gameStart();
}

// Game Loop
function gameLoop(event) {
    ocean.update();
    island.update();
    plane.update();

    for (var count = 0; count < CLOUD_NUM; count++) {
        clouds[count].update();
    }

    collisionCheck();

    scoreboard.update();

    stage.update();
}

// Plane Class
var Plane = (function () {
    function Plane() {
        this.image = new createjs.Bitmap(queue.getResult("plane"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;
        this.image.y = 430;

        stage.addChild(this.image);

        // Play engine sound forever
        createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
    }
    Plane.prototype.update = function () {
        this.image.x = stage.mouseX;
    };
    return Plane;
})();

// Island Class
var Island = (function () {
    function Island() {
        this.image = new createjs.Bitmap(queue.getResult("island"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;
        this.dy = 5;
        stage.addChild(this.image);
        this.reset();
    }
    Island.prototype.reset = function () {
        this.image.y = -this.height;
        this.image.x = Math.floor(Math.random() * stage.canvas.width);
    };

    Island.prototype.update = function () {
        this.image.y += this.dy;
        if (this.image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    };
    return Island;
})();

// Cloud Class
var Cloud = (function () {
    function Cloud() {
        this.image = new createjs.Bitmap(queue.getResult("cloud"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;
        stage.addChild(this.image);
        this.reset();
    }
    Cloud.prototype.reset = function () {
        this.image.y = -this.height;
        this.image.x = Math.floor(Math.random() * stage.canvas.width);
        this.dy = Math.floor(Math.random() * 5 + 5);
        this.dx = Math.floor(Math.random() * 4 - 2);
    };

    Cloud.prototype.update = function () {
        this.image.y += this.dy;
        this.image.x += this.dx;
        if (this.image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    };
    return Cloud;
})();

// Ocean Class
var Ocean = (function () {
    function Ocean() {
        this.image = new createjs.Bitmap(queue.getResult("ocean"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.dy = 5;
        stage.addChild(this.image);
        this.reset();
    }
    Ocean.prototype.reset = function () {
        this.image.y = -960;
    };

    Ocean.prototype.update = function () {
        this.image.y += this.dy;
        if (this.image.y >= 0) {
            this.reset();
        }
    };
    return Ocean;
})();

// The Distance Utility Function
function distance(p1, p2) {
    var firstPoint;
    var secondPoint;
    var theXs;
    var theYs;
    var result;

    firstPoint = new createjs.Point();
    secondPoint = new createjs.Point();

    firstPoint.x = p1.x;
    firstPoint.y = p1.y;

    secondPoint.x = p2.x;
    secondPoint.y = p2.y;

    theXs = secondPoint.x - firstPoint.x;
    theYs = secondPoint.y - firstPoint.y;

    theXs = theXs * theXs;
    theYs = theYs * theYs;

    result = Math.sqrt(theXs + theYs);

    return result;
}

// Check Collision between Plane and Island
function planeAndIsland() {
    var point1 = new createjs.Point();
    var point2 = new createjs.Point();

    point1.x = plane.image.x;
    point1.y = plane.image.y;
    point2.x = island.image.x;
    point2.y = island.image.y;
    if (distance(point1, point2) < ((plane.height * 0.5) + (island.height * 0.5))) {
        createjs.Sound.play("yay");
        scoreboard.score += 100;
        island.reset();
    }
}

// Check Collision between Plane and Cloud
function planeAndCloud(theCloud) {
    var point1 = new createjs.Point();
    var point2 = new createjs.Point();
    var cloud = new Cloud();

    cloud = theCloud;

    point1.x = plane.image.x;
    point1.y = plane.image.y;
    point2.x = cloud.image.x;
    point2.y = cloud.image.y;
    if (distance(point1, point2) < ((plane.height * 0.5) + (cloud.height * 0.5))) {
        createjs.Sound.play("thunder");
        scoreboard.lives -= 1;
        cloud.reset();
    }
}

// Collision Check Utility Function
function collisionCheck() {
    planeAndIsland();

    for (var count = 0; count < CLOUD_NUM; count++) {
        planeAndCloud(clouds[count]);
    }
}

var Scoreboard = (function () {
    function Scoreboard() {
        this.labelString = "";
        this.lives = PLAYER_LIVES;
        this.score = 0;
        this.label = new createjs.Text(this.labelString, GAME_FONT, FONT_COLOUR);
        this.update();
        this.width = this.label.getBounds().width;
        this.height = this.label.getBounds().height;

        stage.addChild(this.label);
    }
    Scoreboard.prototype.update = function () {
        this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
        this.label.text = this.labelString;
    };
    return Scoreboard;
})();

// Main Game Function
function gameStart() {
    var point1 = new createjs.Point();
    var point2 = new createjs.Point();

    ocean = new Ocean();
    island = new Island();
    plane = new Plane();

    for (var count = 0; count < CLOUD_NUM; count++) {
        clouds[count] = new Cloud();
    }

    scoreboard = new Scoreboard();
}
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

var greeter = new Greeter("world");

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};

document.body.appendChild(button);

