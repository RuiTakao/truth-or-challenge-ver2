import { message, button } from "../../util/text-list";
import { Card } from "./Card";

export class Bubble {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  text: HTMLParagraphElement;
  eventContent: HTMLDivElement;
  eventContentText: HTMLParagraphElement;
  decideCardEvent: HTMLButtonElement;
  clearCardOfSelectTypeEvent: HTMLButtonElement;

  get getRemoveSelectClassButton() {
    return this.clearCardOfSelectTypeEvent;
  }

  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "playing-card-game-section__bubble__template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.text = this.element.querySelector(
      ".playing-card-game-section__bubble__text"
    )! as HTMLParagraphElement;
    this.text.innerText = message.playingCardGameSectionMessage;
    this.eventContent = this.element.querySelector(
      ".playing-card-game-section__event-content"
    )! as HTMLDivElement;
    this.eventContent.style.display = "none";
    this.eventContentText = this.eventContent.querySelector(
      ".playing-card-game-section__event-content__text"
    )! as HTMLParagraphElement;
    this.eventContentText.innerText =
      message.playingCardGameSectionButtonMessage;
    this.decideCardEvent = this.eventContent.querySelector(
      "#playing-card-game-section__decided-card-event"
    )! as HTMLButtonElement;
    this.decideCardEvent.innerText = button.decideCardEventButtonText;
    this.clearCardOfSelectTypeEvent = this.eventContent.querySelector(
      "#playing-card-game-section__clear-card-of-select-type-event"
    )! as HTMLButtonElement;
    this.clearCardOfSelectTypeEvent.innerText =
      button.clearCardOfSelectTypeEventButtonText;
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  hide() {
    this.element.classList.add("--hide");
  }

  fadeIn() {
    this.element.classList.add("--fadeIn");
    setTimeout(() => {
      this.element.classList.remove("--hide");
    }, 100);
  }

  openEventButton() {
    if (this.eventContent.style.display == "none") {
      this.text.style.display = "none";
      this.eventContent.style.display = "block";
    }
    this.vibe();
  }

  closeEventButton() {
    if (this.text.style.display == "none") {
      this.eventContent.style.display = "none";
      this.text.style.display = "block";
    }
    this.vibe();
  }

  vibe() {
    this.element.classList.add("--rightRotate");
    setTimeout(() => {
      this.element.classList.remove("--rightRotate");
      this.element.classList.add("--leftRotate");
    }, 100);
    setTimeout(() => {
      this.element.classList.remove("--leftRotate");
    }, 200);
  }
}
