var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "background", src: "assets/images/bg.png" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ];
    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [2, 2, 226, 178],
            [230, 2, 211, 69],
            [443, 69, 62, 63],
            [443, 2, 65, 65],
            [230, 73, 211, 69],
            [230, 144, 211, 69]
        ],
        "animations": {
            "cloud": [0],
            "instructionsButton": [1],
            "island": [2],
            "plane": [3],
            "playButton": [4],
            "tryAgainButton": [5]
        }
    };
    //Veggies Spritesheet
    var veggiesSpritesheet = {
        "images": ["assets/images/veggies.png"],
        "frames": [
            [483, 2, 119, 502],
            [336, 2, 145, 628],
            [832, 337, 244, 309],
            [604, 2, 226, 399],
            [541, 506, 279, 427],
            [2, 2, 332, 633],
            [822, 648, 218, 314],
            [282, 637, 257, 314],
            [832, 2, 251, 333],
            [2, 637, 278, 325]
        ],
        "animations": {
            "carrot": [0],
            "cellery": [1],
            "green-pepper": [2],
            "hot-pepper": [3],
            "jalapeno": [4],
            "lettuce": [5],
            "onion": [6],
            "orange-pepper": [7],
            "red-pepper": [8],
            "yellow-pepper": [9]
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.veggies = new createjs.SpriteSheet(veggiesSpritesheet);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map