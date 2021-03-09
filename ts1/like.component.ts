export class LikeComponent {
  constructor(private _clickState: boolean, private _likesCount: number) {}

  private clickStatus() {
    console.log(`State: ${this._clickState} and count is: ${this._likesCount}`);
  }

  onClick() {
    this._likesCount += this._likesCount ? -1 : +1;
    this._clickState = !this._clickState;
    this.clickStatus();
  }
}
