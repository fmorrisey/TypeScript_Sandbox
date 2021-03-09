class Point {
  constructor(private x?: number, private y?: number) {
    //   ? makes params optional
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  get X() {
    return this.x;
  }
  set X(value) {
    if (value < 0) {
      throw new Error("Value cannot be less than zero");
    }
    this.x = value;
  }
  getY() {
    return this.y;
  }
}

let point = new Point(6, 5);
let x = point.X;
point.X = 10;
point.draw();
