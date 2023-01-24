import { choiceTruthOrChallengeSectionUserStatus } from "../../status/user.js";

export class ChoiceTruthOrChallengeSection {
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

    this.attach();
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}
