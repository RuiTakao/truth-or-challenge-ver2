export abstract class EnterPlayerNameEvent {
  enterFirstInput: HTMLInputElement;
  enterSecondInput: HTMLInputElement;
  button: HTMLButtonElement;
  constructor() {
    this.enterFirstInput = document.getElementById(
      "enter-first-player-name-event"
    )! as HTMLInputElement;
    this.enterSecondInput = document.getElementById(
      "enter-second-player-name-event"
    )! as HTMLInputElement;
    this.button = document.getElementById(
      "enter-player-name-and-decide-event"
    )! as HTMLButtonElement;
  }

  abstract configure(): void;

  abstract inputHundler(): void;
}
