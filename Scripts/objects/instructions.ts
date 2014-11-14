/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-11-14
 * Time: 3:49 PM
 * To change this template use File | Settings | File Templates.
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
