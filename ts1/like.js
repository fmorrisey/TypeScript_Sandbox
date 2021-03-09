"use strict";
exports.__esModule = true;
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_clickedState, _counter) {
        this._clickedState = _clickedState;
        this._counter = _counter;
        this._counter = 2;
        this._clickedState = true;
    }
    Like.prototype.clickStatus = function () {
        console.log("State: " + this._clickedState + " and count is: " + this._counter);
    };
    Like.prototype.onClick = function () {
        if (this._clickedState == true) {
            this._clickedState = false;
            this._counter += 1;
            this.clickStatus();
        }
        else {
            this._clickedState = true;
            this._counter -= 1;
            this.clickStatus();
        }
    };
    return Like;
}());
exports.Like = Like;
