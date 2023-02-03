import { FirstAnimationOfNameEntrySection } from "./animation/FirstAnimationOfNameEntrySection";

export class NameEntrySection {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "name-entry-section__template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = "name-entry-section";

    this.attach();
    new FirstAnimationOfNameEntrySection();
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}
