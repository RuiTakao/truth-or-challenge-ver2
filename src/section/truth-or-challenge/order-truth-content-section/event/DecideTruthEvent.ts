import { selectOrder } from "../../../../status/trutOrChallenge.js";
import { SecondAnimationOfOerderTruthContentSection } from "../animation/SecondAnimationOfOrderTruthContentSection.js";

export class DecideTruthEvent {
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  button: HTMLButtonElement;
  select: HTMLSelectElement;
  constructor() {
    this.hostElement = document.getElementById(
      "order-truth-content"
    )! as HTMLDivElement;
    this.element = document.querySelector(
      ".order-truth-content-first"
    )! as HTMLDivElement;
    this.button = document.getElementById(
      "decide-truth-event"
    )! as HTMLButtonElement;
    this.select = this.element.querySelector(
      ".order-truth-content__select-list-input"
    )! as HTMLSelectElement;

    this.configure();
  }

  configure() {
    this.button.addEventListener("click", this.eventHandler.bind(this));
  }

  eventHandler() {
    console.log("select truth");
    console.log(this.select.value);
    selectOrder.truth = this.select.value;
    this.hostElement.removeChild(this.element);
    new SecondAnimationOfOerderTruthContentSection();
  }
}
