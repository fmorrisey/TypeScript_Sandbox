export class Like {
  constructor(public _clickedState?: boolean, public _counter?: number) {
    this._counter = 2;
    this._clickedState = true;
  }

  private clickStatus() {
    console.log(`State: ${this._clickedState} and count is: ${this._counter}`);
  }

  onClick() {
    if (this._clickedState == true) {
      this._clickedState = false;
      this._counter += 1;
      this.clickStatus();
    } else {
      this._clickedState = true;
      this._counter -= 1;
      this.clickStatus();
    }
  }
}
