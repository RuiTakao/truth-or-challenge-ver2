import { message } from "../../util/text-list";

export class Label {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  firstText: HTMLParagraphElement;
  secondText: HTMLParagraphElement;

  constructor(private username: string) {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "playing-card-game-section__label__template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = "opening-message-label";

    this.firstText = this.element.querySelector(
      ".opening-message-label-text--first"
    )! as HTMLParagraphElement;
    this.firstText.innerText = this.username + message.openingMessage.firstText;
    this.secondText = this.element.querySelector(
      ".opening-message-label-text--second"
    )! as HTMLParagraphElement;
    this.secondText.innerText = message.openingMessage.secondText;

    this.hide();
    this.attach();
    this.openingMotion();
  }

  attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  hide() {
    this.element.classList.add("--hide");
    this.firstText.classList.add("--hide");
    this.secondText.classList.add("--hide");
    this.firstText.classList.add("--rightSide");
    this.secondText.classList.add("--rightSide");
  }

  private openingMotion() {
    this.element.classList.add("--fadeIn");
    setTimeout(() => {
      this.firstText.classList.add("--slideIn");
    }, 300);
    setTimeout(() => {
      this.firstText.classList.add("--slideOut");
      this.secondText.classList.add("--slideIn");
    }, 1200);
    setTimeout(() => {
      this.secondText.classList.add("--slideOut");
    }, 2100);
    setTimeout(() => {
      this.element.classList.add("--fadeOut");
    }, 2700);
    setTimeout(() => {
      this.destroy();
    }, 3200);
  }
}
