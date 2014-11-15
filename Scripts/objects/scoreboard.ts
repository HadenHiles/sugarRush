﻿/**
 *  File: scoreboard.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is responsible for displaying the scoreboard
 *  at the top of the screen while the game is being played
 */
module objects {
    //Scoreboard Class
    export class Scoreboard {
        //Class Variables
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        score: number;
        sugarMeterWidth: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        sugarMeterLabel: createjs.Text;
        sugarMeterText: string = "";
        sugarMeterColor: string;
        sugarLevelBoxOutline: createjs.Graphics;
        sugarMeterOutline: createjs.shape;
        sugarLevelBox: createjs.Graphics;
        sugarMeter: createjs.shape;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.lives = constants.LIVES;
            this.score = 0;
            this.sugarMeterWidth = 100;
            this.sugarMeterColor = "#B1C243";
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.label.x = 460;
            this.sugarMeterLabel = new createjs.Text(this.sugarMeterText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width + this.sugarMeterLabel.getBounds().width;
            this.height = this.label.getBounds().height + this.sugarMeterLabel.getBounds().height;

            game.addChild(this.label);
            game.addChild(this.sugarMeterLabel);

            //Sugar Meter outline box
            this.sugarLevelBoxOutline = new createjs.Graphics();
            this.sugarLevelBoxOutline.setStrokeStyle(1);
            this.sugarLevelBoxOutline.beginStroke(createjs.Graphics.getRGB(0,0,0));
            this.sugarLevelBoxOutline.drawRect(0, 0, 200, 35);
            this.sugarMeterOutline = new createjs.Shape(this.sugarLevelBoxOutline);
            this.sugarMeterOutline.x = 255;
            this.sugarMeterOutline.y = 5;
            game.addChild(this.sugarMeterOutline);
        }

        //Update the scoreboard content
        update() {
            this.sugarMeterText = "Sugar Meter: ";
            this.sugarMeterLabel.text = this.sugarMeterText;
            this.sugarMeterLabel.y = -7;
            this.labelText = "Score: " + this.score.toString();
            this.label.text = this.labelText;
            this.label.y = -7;

            //Sugar Meter box
            game.removeChild(this.sugarMeter);
            this.sugarLevelBox = new createjs.Graphics();
            this.sugarLevelBox.beginFill(this.sugarMeterColor);
            this.sugarLevelBox.drawRect(0, 0, this.sugarMeterWidth, 35);
            this.sugarMeter = new createjs.Shape(this.sugarLevelBox);
            this.sugarMeter.x = 255;
            this.sugarMeter.y = 5;
            game.addChild(this.sugarMeter);
        }

        //Remove the scoreboard from the game
        destroy() {
            game.removeChild(this.label);
            game.removeChild(this.sugarMeterLabel);
            game.removeChild(this.sugarMeter);
        }
    }
} 