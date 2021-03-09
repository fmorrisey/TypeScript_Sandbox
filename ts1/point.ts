export class Point {
  constructor(private _x?: number, private _y?: number) {
    //   ? makes params optional
  }

  draw() {
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }

  get x() {
    return this._x;
  }
  set x(value) {
    if (value < 0) {
      throw new Error("Value cannot be less than zero");
    }
    this._x = value;
  }
}
