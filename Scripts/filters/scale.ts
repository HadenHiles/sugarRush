/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-12-04
 * Time: 6:56 PM
 * To change this template use File | Settings | File Templates.
 */
///<reference path="../../js/createjs-lib.d.ts"/>
///<reference path="../../js/easeljs.d.ts"/>
///<reference path="../../js/preloadjs.d.ts"/>
///<reference path="../../js/soundjs.d.ts"/>
module filters {
    export class Scale {
        private _original: any;
        private _scaleX:number;
        private _scaleY:number;
        private _scaleWidth:number;
        private _scaleHeight:number;
        constructor(){
            this._scaleX = 1;
            this._scaleY = 1;
            this._scaleWidth = .95;
            this._scaleHeight = .95;
            Object.defineProperty(this, "original", {
                set: (value) => {
                    this._original = value;
                },
                get: () => {
                    return this._original;
                }
            });
            Object.defineProperty(this, "parent", {
                get: () => {
                    return this._original.parent;
                }
            });
        }

        getTransformedBounds() {
            var bounds = this._original.getTransformedBounds();
            bounds.x = bounds.x * this._scaleX;
            bounds.y = bounds.y * this._scaleY;
            bounds.height = bounds.height * this._scaleHeight;
            bounds.width = bounds.width * this._scaleWidth;
            return bounds;
        }

        localToGlobal(x: number, y: number): createjs.Point{
            return this._original.parent.localToGlobal(x, y);
        }
    }
}