import { FirstAnimationOfOerderTruthContentSection } from "./animation/FirstAnimationOfOerderTruthContentSection";

export class OrderTruthContent {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById(
      "truth-or-callenge-app"
    )! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "order-truth-content-template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = "order-truth-content";

    this.attach();
    this.next();
  }

  attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  next() {
    new FirstAnimationOfOerderTruthContentSection();
  }
}
