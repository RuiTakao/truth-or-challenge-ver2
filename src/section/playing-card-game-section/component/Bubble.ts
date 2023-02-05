import { message, button } from "../../../util/text-list";
import { Card } from "./Card";
// import { DecideCardEvent } from "../event/DecideCardEvent";

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

  get getDecideCardButton() {
    return this.decideCardEvent;
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
    this.eventContent = this.element.querySelector(
      ".playing-card-game-section__event-content"
    )! as HTMLDivElement;
    this.eventContentText = this.eventContent.querySelector(
      ".playing-card-game-section__event-content__text"
    )! as HTMLParagraphElement;
    this.decideCardEvent = this.eventContent.querySelector(
      "#playing-card-game-section__decided-card-event"
    )! as HTMLButtonElement;
    this.clearCardOfSelectTypeEvent = this.eventContent.querySelector(
      "#playing-card-game-section__clear-card-of-select-type-event"
    )! as HTMLButtonElement;

    this.setTextEventContent();
    this.hide();
    this.attach();
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  hide() {
    this.element.classList.add("--hide");
    this.eventContent.style.display = "none";
    this.element.style.display = "none";
    this.text.style.display = "block";
  }

  lock() {
    
  }

  setTextEventContent() {
    this.eventContentText.innerText =
      message.playingCardGameSectionButtonMessage;
    this.decideCardEvent.innerText = button.decideCardEventButtonText;
    this.clearCardOfSelectTypeEvent.innerText =
      button.clearCardOfSelectTypeEventButtonText;
  }

  setText(userName: string) {
    this.text.innerText = userName + message.playingCardGameSectionMessage;
  }

  fadeIn(userName: string) {
    this.setText(userName);
    this.element.style.display = "block";
    setTimeout(() => {
      this.element.classList.add("--fadeIn");
    }, 100);
    setTimeout(() => {
      this.element.classList.remove("--hide");
    }, 200);
  }

  openEventButton() {
    this.text.style.display = "none";
    this.eventContent.style.display = "block";
  }

  closeEventButton() {
    this.eventContent.style.display = "none";
    this.text.style.display = "block";
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

  destroy() {
    this.hostElement.removeChild(this.element);
  }
}
