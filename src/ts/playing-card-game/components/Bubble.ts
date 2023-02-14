import { User } from "../../interface/User";

export class Bubble {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  private messageContainer: HTMLParagraphElement;
  private buttonContainer: HTMLDivElement;
  private yesButton: HTMLButtonElement;
  private noButton: HTMLButtonElement;

  get yesButtonElement() {
    return this.yesButton;
  }

  get noButtonElement() {
    return this.noButton;
  }

  constructor(user: User) {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.hostElement.appendChild(this.createElement(user));
    this.messageContainer = this.element.querySelector(
      "p"
    )! as HTMLParagraphElement;
    this.buttonContainer = this.element.querySelector(
      "#button-container"
    )! as HTMLDivElement;
    this.yesButton = this.buttonContainer.querySelector(
      "#yes-button"
    )! as HTMLButtonElement;
    this.noButton = this.buttonContainer.querySelector(
      "#no-button"
    )! as HTMLButtonElement;
  }

  openEventButton() {
    if (this.messageContainer.style.display === "block") {
      this.messageContainer.style.display = "none";
    }
    if (this.buttonContainer.style.display === "none") {
      this.buttonContainer.style.display = "block";
    }
    this.vibe();
  }

  closeEventButton() {
    if (this.messageContainer.style.display === "none") {
      this.messageContainer.style.display = "block";
    }
    if (this.buttonContainer.style.display === "block") {
      this.buttonContainer.style.display = "none";
    }
    this.vibe();
  }

  vibe() {
    this.element.classList.add("--right-rotate");
    setTimeout(() => {
      this.element.classList.remove("--right-rotate");
      this.element.classList.add("--left-rotate");
    }, 100);
    setTimeout(() => {
      this.element.classList.remove("--left-rotate");
    }, 200);
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  private createElement(user: User): HTMLDivElement {
    const sectionName = "playing-card-game";
    const elementName = "bubble";

    // bubble
    const element = document.createElement("div");
    element.className = `${sectionName}__${elementName}`;

    // body
    const body = document.createElement("div");
    body.className = `${sectionName}__${elementName}__body`;

    // arrow
    const arrow = document.createElement("div");
    arrow.className = `${sectionName}__${elementName}__arrow`;

    // arrow-shadow
    const arrowShadow = document.createElement("div");
    arrowShadow.className = `${sectionName}__${elementName}__arrow__shadow`;

    // message
    const message = document.createElement("p");
    message.id = "message-container";
    message.className = `${sectionName}__${elementName}__message`;
    message.innerText = `${user.name}さんのターンです\nカードを選択してください`;
    message.style.display = "block";

    // appendChild
    element.appendChild(body); // body
    element.appendChild(arrow); // arrow
    element.appendChild(arrowShadow); // arrow-shadow
    element.appendChild(message); // message
    element.appendChild(
      this.createButtonContainerElement(sectionName, elementName) // button-container
    );

    // return
    return element;
  }

  private createButtonContainerElement(
    sectionName: string,
    parentElementName: string
  ): HTMLDivElement {
    const elementName = `${parentElementName}__button-container`;

    // button-container
    const element = document.createElement("div");
    element.className = `${sectionName}__${elementName}`;
    element.id = "button-container";
    element.style.display = "none";

    // message
    const message = document.createElement("p");
    message.className = `${sectionName}__${elementName}__message`;
    message.innerText = "これにしますか？";

    // appendChild
    element.appendChild(message); // message
    element.appendChild(this.createButtonElement(sectionName, elementName)); // button-list

    // return
    return element;
  }

  private createButtonElement(
    sectionName: string,
    parentElementName: string
  ): HTMLDivElement {
    const elementName = `${parentElementName}__button-list`;

    // button-list
    const element = document.createElement("div");
    element.className = `${sectionName}__${elementName}`;

    // yes-button
    const yesButton = document.createElement("button");
    yesButton.id = "yes-button";
    yesButton.className = `${sectionName}__${elementName}__yes-button`;
    yesButton.type = "button";
    yesButton.innerText = "はい";

    // no-button
    const noButton = document.createElement("button");
    noButton.id = "no-button";
    noButton.className = `${sectionName}__${elementName}__no-button`;
    noButton.type = "button";
    noButton.innerText = "いいえ";

    element.appendChild(yesButton); // yes-button
    element.appendChild(noButton); // no-button

    // return
    return element;
  }
}
