import { EndGame } from "../../end-game/EndGame";
import { Message } from "./Message";

export class LoserAnswer {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  private sectionName: string;
  constructor() {
    this.sectionName = "loser-answer";
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
    button.innerText = "OK";
    button.addEventListener("click", this.loserAnswerd.bind(this));

    this.element.appendChild(button);
  }

  private loserAnswerd() {
    this.hostElement.removeChild(this.element);
    new EndGame();
  }
}
