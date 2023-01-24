import { message } from "../../../../util/text-list.js";

export class OpeningMessageLabel {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  firstText: HTMLParagraphElement;
  secondText: HTMLParagraphElement;

  constructor(private username: string) {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "opening-message-label__template"
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
    this.secondText = this.element.querySelector(
      ".opening-message-label-text--second"
    )! as HTMLParagraphElement;

    this.init();
    this.attach();
    this.animation();
  }

  attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  init() {
    this.labeiInit();
    this.firstTextInit();
    this.secondTextInit();
  }

  animation() {
    this.labelAnimation();
    this.firstTextAnimation();
    this.secondTextAnimation();
    setTimeout(() => {
      this.destroy();
    }, 3200);
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  private labeiInit() {
    this.element.classList.add("--hide");
  }

  private firstTextInit() {
    this.firstText.innerText = this.username + message.openingMessage.firstText;
    this.firstText.classList.add("--hide");
    this.firstText.classList.add("--rightSide");
  }

  private secondTextInit() {
    this.secondText.innerText = message.openingMessage.secondText;
    this.secondText.classList.add("--hide");
    this.secondText.classList.add("--rightSide");
  }

  private labelAnimation() {
    this.element.classList.add("--fadeIn");
    setTimeout(() => {
      this.element.classList.add("--fadeOut");
    }, 2700);
  }

  private firstTextAnimation() {
    setTimeout(() => {
      this.firstText.classList.add("--slideIn");
    }, 300);
    setTimeout(() => {
      this.firstText.classList.add("--slideOut");
    }, 1200);
  }

  private secondTextAnimation() {
    setTimeout(() => {
      this.secondText.classList.add("--slideIn");
    }, 1200);
    setTimeout(() => {
      this.secondText.classList.add("--slideOut");
    }, 2100);
  }
}
