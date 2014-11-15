/**
 *  File: instructions.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This file generates the instructions for the menu screen
 */
module objects {
    export class Instructions extends createjs.Text {
        constructor(x:number,y:number,labelText:string) {
            super(labelText, constants.INSTRUCTIONS_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
}
