import { Bubble } from "./Bubble";

export class Card {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  cardList: NodeListOf<HTMLLIElement>;

  get getCardList() {
   return this.cardList;
  }

  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "playing-card-game-section__card__template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;

    this.cardList = this.element.querySelectorAll(
      ".card"
    )! as NodeListOf<HTMLLIElement>;
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  slideInRight() {
    this.cardList.forEach((value) => {
      value.classList.add("--moving");
      setTimeout(() => {
        value.classList.remove("--hide");
        value.classList.remove("--moving");
      }, 3500);
      setTimeout(() => {
        value.classList.remove("--lock");
      }, 6000);
    });
  }

  hide() {
    this.cardList.forEach((value) => {
      value.classList.add("--hide");
    });
  }

  lock() {
    this.cardList.forEach((value) => {
      value.classList.add("--lock");
    });
  }

  click(bubble: Bubble) {
    this.cardList.forEach((value) => {
      value.addEventListener("click", () => {
        bubble.openEventButton();
        this.removeSelectClass();
        this.addSelectClass(value);
      });
    });
  }

  addSelectClass(value: HTMLLIElement) {
    value.classList.add("--selected");
  }

  removeSelectClass() {
    this.cardList.forEach((value) => {
      if (value.classList.contains("--selected")) {
        value.classList.remove("--selected");
      }
    });
  }
}
