/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-12-12
 * Time: 8:30 PM
 * To change this template use File | Settings | File Templates.
 */
///<reference path="../../js/createjs-lib.d.ts"/>
///<reference path="../../js/easeljs.d.ts"/>
///<reference path="../../js/preloadjs.d.ts"/>
///<reference path="../../js/soundjs.d.ts"/>
var managers;
(function (managers) {
    var GroupManager = (function () {
        function GroupManager(stage, game, groups) {
            this.stage = stage;
            this.game = game;
            this.groups = groups;
            this.dx = 3;
            this.dy = 0;
            for (var count = 0; count < this.groups.length; count++) {
                this.groups[count].x = 1200;
                game.addChild(this.groups[count]);
            }
        }
        GroupManager.prototype.moveGroup = function () {
            var randomGroup = this.groups[0];
            randomGroup.y += this.dy;
            randomGroup.x -= this.dx;
            //            if(randomGroup.x <= 200) {
            //                this.moveGroup();
            //            }
            if (randomGroup.x <= -200) {
                this.reset(randomGroup);
            }
        };
        GroupManager.prototype.reset = function (group) {
            group.x = 1200;
            group.y = 200;
        };
        GroupManager.prototype.randomGroup = function () {
            var randomNum = Math.floor(Math.random() * (this.groups.length + 1));
            return this.groups[randomNum];
        };
        return GroupManager;
    })();
    managers.GroupManager = GroupManager;
})(managers || (managers = {}));
//# sourceMappingURL=groupManager.js.map