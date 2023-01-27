import { choiceTruthOrChallengeSectionUserStatus } from "../../../status/user.js";

export class ChoiceTruthOrChallenge {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  text1: HTMLParagraphElement;
  text2: HTMLParagraphElement;
  eventContainer: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById(
      "truth-or-callenge-app"
    )! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "choice-truth-or-callenge-template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = "choice-truth-or-challenge";
    this.text1 = this.element.querySelector(
      ".choice-truth-or-callenge-section__message--text1"
    )! as HTMLParagraphElement;
    this.text2 = this.element.querySelector(
      ".choice-truth-or-callenge-section__message--text2"
    )! as HTMLParagraphElement;
    this.eventContainer = this.element.querySelector(
      ".choice-truth-or-callenge-section__event-container"
    )! as HTMLDivElement;

    this.attach();
    this.init();
  }

  attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  init() {
    this.text1.classList.add('--hide');
    this.text2.classList.add('--hide');
    this.eventContainer.classList.add('--hide');
  }
}
