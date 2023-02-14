import { User } from "../../interface/User";

export class Label {
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  firstMessage: HTMLParagraphElement;
  secondMessage: HTMLParagraphElement;

  constructor(private user: User) {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.hostElement.appendChild(this.createElement(user));
    this.firstMessage = this.element.children[0]! as HTMLParagraphElement;
    this.secondMessage = this.element.children[1]! as HTMLParagraphElement;

    this.openingMotion();
  }

  private createElement(user: User): HTMLDivElement {
    const sectionName = "playing-card-game";

    // label
    const label = document.createElement("div");
    label.className = `${sectionName}__label`;

    // first-message
    const firstMessage = document.createElement("p");
    firstMessage.className = `${sectionName}__label__first-message`;
    firstMessage.innerText = `${user.name}さんのターンです`

    // second-message
    const secondMessage = document.createElement("p");
    secondMessage.className = `${sectionName}__label__second-message`;
    secondMessage.innerText = "カードを選択してください";

    // append
    label.appendChild(firstMessage); // first-message
    label.appendChild(secondMessage); // second-message
    return label;
  }

  private openingMotion() {
    this.element.classList.add("--fade-in");
    setTimeout(() => {
      this.firstMessage.classList.add("--slide-in-left");
    }, 300);
    setTimeout(() => {
      this.firstMessage.classList.add("--slide-out-left");
      this.secondMessage.classList.add("--slide-in-left");
    }, 1200);
    setTimeout(() => {
      this.secondMessage.classList.add("--slide-out-left");
    }, 2100);
    setTimeout(() => {
      this.element.classList.add("--fade-out");
    }, 2700);
    setTimeout(() => {
      this.destroy();
    }, 3200);
  }

  private destroy() {
    this.hostElement.removeChild(this.element);
  }
}
