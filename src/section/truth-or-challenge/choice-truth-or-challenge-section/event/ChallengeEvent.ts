import { OrderChallengeContent } from "../../order-challenge-content-section/OrderChallengeContent.js";

export class ChallengeEvent {
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  button: HTMLButtonElement;
  constructor() {
    this.hostElement = document.getElementById(
      "truth-or-callenge-app"
    )! as HTMLDivElement;
    this.element = document.getElementById(
      "choice-truth-or-challenge"
    )! as HTMLDivElement;
    this.button = document.getElementById(
      "choice-challenge-event"
    )! as HTMLButtonElement;

    this.configure();
  }

  configure() {
    this.button.addEventListener("click", this.eventHandler.bind(this));
  }

  eventHandler() {
    this.destroyElement();
    new OrderChallengeContent();
  }

  destroyElement() {
    this.hostElement.removeChild(this.element);
  }
}
