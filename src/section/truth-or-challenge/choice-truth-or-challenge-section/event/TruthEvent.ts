export class TruthEvent {
  button: HTMLButtonElement;
  constructor() {
    this.button = document.getElementById("truth-event")! as HTMLButtonElement;

    this.configure();
  }

  configure() {
    this.button.addEventListener("click", this.eventHandler.bind(this));
  }

  eventHandler() {
    console.log('truth event');
  }
}
