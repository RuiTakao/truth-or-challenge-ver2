import { ChoiceTruthOrChallenge } from "./choice-truth-or-challenge-section/ChoiceTruthOrChallengeSection.js";

export class TruthOrChallenge {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "truth-or-callenge-template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = "truth-or-callenge-app";

    this.attach();
    this.next();
  }

  attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  next() {
    setTimeout(() => {
      new ChoiceTruthOrChallenge();
    }, 1000);
  }
}
