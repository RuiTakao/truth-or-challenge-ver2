import { FirstAnimationOfPlayingCardGameSection } from "./animation/FirstAnimationOfPlayingCardGameSection";
import { ShuffleUsers } from "../../status/ShuffleUsers";


export class PlayingCardGameSection {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  cardTemplateElement: HTMLTemplateElement;
  cardElement: HTMLUListElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "playing-card-game-section__template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = "playing-card-game-section";

    this.cardTemplateElement = document.getElementById(
      "playing-card-game-section__card__template"
    )! as HTMLTemplateElement;
    this.cardElement = this.element.querySelector(
      ".playing-card-game-section__card-list"
    )! as HTMLUListElement;

    new ShuffleUsers();
    this.attach();
    new FirstAnimationOfPlayingCardGameSection();
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
    this.insertCardList();
  }

  insertCardList() {
    for (let i = 1; i <= 13; i++) {
      const importedNode = document.importNode(
        this.cardTemplateElement.content,
        true
      );
      const element = importedNode.firstElementChild as HTMLLIElement;
      element.id = `card${i}`;
      this.cardElement.insertAdjacentElement("beforeend", element);
    }
  }
}
