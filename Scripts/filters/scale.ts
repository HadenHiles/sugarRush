/**
 * Created with IntelliJ IDEA.
 * User: HandsHiles
 * Date: 14-12-04
 * Time: 6:56 PM
 * To change this template use File | Settings | File Templates.
 */
module filters{
    export class Scale{
        private _original: any;
        private _scaleX:number;
        private _scaleY:number;
        private _scaleWidth:number;
        private _scaleHeight:number;
        constructor(){
            this._original = null;
            this._scaleX = 1;
            this._scaleY = 1;
            this._scaleWidth = .95;
            this._scaleHeight = .9;
            Object.defineProperty(this, "original", {
                set: (original) => {
                    this._original = original;
                },
                get: () => {
                    return this._original;
                }
            });
            Object.defineProperty(this, "x", {
                get: () => {
                    return this._original.x * this._scaleX;
                }
            });
            Object.defineProperty(this, "y", {
                get: () => {
                    return this._original.y * this._scaleY;
                }
            });
            Object.defineProperty(this, "height", {
                get: () => {
                    return this._original.height + this._scaleHeight;
                }
            });
            Object.defineProperty(this, "width", {
                get: () => {
                    return this._original.width + this._scaleWidth;
                }
            });
        }
    }
}