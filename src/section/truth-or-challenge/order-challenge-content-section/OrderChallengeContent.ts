export class OrderChallengeContent {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById(
      "truth-or-callenge-app"
    )! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "order-challenge-content-template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = "order-challenge-content";

    this.attach();
  }

  attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}
