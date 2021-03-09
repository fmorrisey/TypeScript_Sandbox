"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_clickState, _likesCount) {
        this._clickState = _clickState;
        this._likesCount = _likesCount;
    }
    LikeComponent.prototype.clickStatus = function () {
        console.log("State: " + this._clickState + " and count is: " + this._likesCount);
    };
    LikeComponent.prototype.onClick = function () {
        this._likesCount += this._likesCount ? -1 : +1;
        this._clickState = !this._clickState;
        this.clickStatus();
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
