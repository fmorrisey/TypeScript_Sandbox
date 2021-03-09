export class Like {
  constructor(public _clickedState?: boolean, public _counter?: number) {
    this._counter = 2;
    this._clickedState = true;
  }

  private clickStatus() {
    console.log(`State: ${this._clickedState} and count is: ${this._counter}`);
  }

  onClick() {
    this._counter += this._counter ? 1 : -1;
    this._clickedState = !this._clickedState;
    this.clickStatus();
  }
}
