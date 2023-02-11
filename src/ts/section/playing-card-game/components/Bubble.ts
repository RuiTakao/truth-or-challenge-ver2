import { message, button } from "../../../util/text-list";

export class Bubble {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  text: HTMLParagraphElement;
  eventContent: HTMLDivElement;
  eventContentText: HTMLParagraphElement;
  decideCardEvent: HTMLButtonElement;
  clearCardOfSelectTypeEvent: HTMLButtonElement;

  get noButtonElement() {
    return this.clearCardOfSelectTypeEvent;
  }

  get yesButtonElement() {
    return this.decideCardEvent;
  }

  constructor(userName: string) {
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

    this.setText(userName);
    this.init();
    this.hide();
    this.attach();
    this.fadeIn();
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  hide() {
    this.element.classList.add("--hide");
  }

  init() {
    this.eventContent.style.display = "none";
    this.text.style.display = "block";
  }

  setText(userName: string) {
    this.text.innerText = userName + message.playingCardGameSectionMessage;
    this.eventContentText.innerText =
      message.playingCardGameSectionButtonMessage;
    this.decideCardEvent.innerText = button.decideCardEventButtonText;
    this.clearCardOfSelectTypeEvent.innerText =
      button.clearCardOfSelectTypeEventButtonText;
  }

  fadeIn() {
    this.element.classList.add("--fadeIn");
    this.element.classList.remove("--hide");
  }

  openEventButton() {
    if (
      this.hostElement.querySelectorAll(".playing-card-game-section__bubble")
        .length > 0
    ) {
      if (this.text.style.display === "block") {
        this.text.style.display = "none";
      }
      if (this.eventContent.style.display === "none") {
        this.eventContent.style.display = "block";
      }
      this.vibe();
    }
  }

  closeEventButton() {
    if (this.text.style.display === "none") {
      this.text.style.display = "block";
    }
    if (this.eventContent.style.display === "block") {
      this.eventContent.style.display = "none";
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

  destroy() {
    this.hostElement.removeChild(this.element);
  }
}
