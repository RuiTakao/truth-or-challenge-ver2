import { Bubble } from "./Bubble";

export class Card {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  card: NodeListOf<HTMLLIElement>;

  get targetCard() {
    let target;
    this.card.forEach(value => {
        target = value;
    });
    return target;
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

    this.card = this.element.querySelectorAll(
      ".card"
    )! as NodeListOf<HTMLLIElement>;
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  slideInRight() {
    this.card.forEach((value) => {
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
    this.card.forEach((value) => {
      value.classList.add("--hide");
    });
  }

  lock() {
    this.card.forEach((value) => {
      value.classList.add("--lock");
    });
  }

  click(bubble: Bubble) {
    this.card.forEach((value) => {
      value.addEventListener("click", () => {
        bubble.cardClickHandler();
        this.removeSelectClass();
        this.addSelectClass(value);
      });
    });
  }

  addSelectClass(value: HTMLLIElement) {
    value.classList.add("--selected");
  }

  removeSelectClass() {
    this.card.forEach((value) => {
      if (value.classList.contains("--selected")) {
        value.classList.remove("--selected");
      }
    });
  }
}
