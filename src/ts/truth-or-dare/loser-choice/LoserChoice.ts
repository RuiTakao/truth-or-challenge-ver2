import { choice } from "../../status/choice";
import { WinnerChoice } from "../winner-choice/WinnerChoice";
import { Message } from "./Message";

export class LoserChoice {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  private sectionName: string;
  constructor() {
    this.sectionName = "loser-choice";
    this.hostElement = document.getElementById(
      "truth-or-dare"
    )! as HTMLDivElement;
    this.element = document.createElement("div");
    this.element.className = this.sectionName;
    this.attach();
    this.setMessage();
    this.buttonList();
  }

  private attach() {
    this.hostElement.appendChild(this.element);
  }

  private setMessage() {
    this.element.appendChild(Message.firstLine(this.sectionName));
    this.element.appendChild(Message.secondLine(this.sectionName));
  }

  private buttonList() {
    const buttonList = document.createElement("div");
    buttonList.className = `${this.sectionName}__button-list`;

    const truthButton = document.createElement("button");
    truthButton.className = `${this.sectionName}__truth-button`;
    truthButton.innerText = "真実";
    truthButton.addEventListener("click", this.truthEvent.bind(this));

    const dareButton = document.createElement("button");
    dareButton.className = `${this.sectionName}__dare-button`;
    dareButton.innerText = "挑戦";
    dareButton.addEventListener("click", this.dareEvent.bind(this));

    buttonList.appendChild(truthButton);
    buttonList.appendChild(dareButton);

    this.element.appendChild(buttonList);
  }

  private truthEvent() {
    choice.truthOrDare = "真実"
    this.element.classList.add("fade-out");
    setTimeout(() => {
      this.hostElement.removeChild(this.element);
      new WinnerChoice();
    }, 500);
  }

  private dareEvent() {
    choice.truthOrDare = "挑戦"
    this.element.classList.add("fade-out");
    setTimeout(() => {
      this.hostElement.removeChild(this.element);
      new WinnerChoice();
    }, 500);
  }
}
