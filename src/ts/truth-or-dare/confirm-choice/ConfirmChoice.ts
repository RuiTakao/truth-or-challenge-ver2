import { LoserAnswer } from "../loser-answer/LoserAnswer";
import { Message } from "./Message";

export class ConfirmChoice {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  private sectionName: string;
  constructor() {
    this.sectionName = "confirm-choice";
    this.hostElement = document.getElementById(
      "truth-or-dare"
    )! as HTMLDivElement;
    this.element = document.createElement("div");
    this.element.className = this.sectionName;
    this.setMessage();
    this.button();
    this.attach();
  }

  private attach() {
    this.hostElement.appendChild(this.element);
  }

  private setMessage() {
    this.element.appendChild(Message.firstLine(this.sectionName));
    this.element.appendChild(Message.secondLine(this.sectionName));
  }

  private button() {
    const sectionName = `${this.sectionName}__button`;

    const button = document.createElement("button");
    button.className = sectionName;
    button.innerText = "指示を確認する";
    button.addEventListener("click", this.confirmWinnerChoice.bind(this));

    this.element.appendChild(button);
  }

  private confirmWinnerChoice() {
    this.element.classList.add("fade-out");
    setTimeout(() => {
      this.hostElement.removeChild(this.element);
      new LoserAnswer();
    }, 500);
  }
}
