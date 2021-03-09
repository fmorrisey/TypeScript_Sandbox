class Point {
  constructor(public x?: number, public y?: number) {
    //   ? makes params optional
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

let point = new Point(6, 5);
point.draw();
