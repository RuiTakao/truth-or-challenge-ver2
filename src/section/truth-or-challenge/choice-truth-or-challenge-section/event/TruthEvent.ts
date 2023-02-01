import { OrderTruthContent } from "../../order-truth-content-section/OrderTruthContent.js";

export class TruthEvent {
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
    this.button = document.getElementById("choice-truth-event")! as HTMLButtonElement;

    this.configure();
  }

  configure() {
    this.button.addEventListener("click", this.eventHandler.bind(this));
  }

  eventHandler() {
    this.destroyElement();
    new OrderTruthContent();
  }

  destroyElement() {
    this.hostElement.removeChild(this.element);
  }
}
