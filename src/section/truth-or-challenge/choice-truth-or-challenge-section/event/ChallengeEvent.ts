export class ChallengeEvent {
  button: HTMLButtonElement;
  constructor() {
    this.button = document.getElementById(
      "challenge-event"
    )! as HTMLButtonElement;

    this.configure();
  }

  configure() {
    this.button.addEventListener("click", this.eventHandler.bind(this));
  }

  eventHandler() {
    console.log("challenge event");
  }
}
