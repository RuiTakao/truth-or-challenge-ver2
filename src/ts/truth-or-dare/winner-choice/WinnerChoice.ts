import { choice } from "../../status/choice";
import { ConfirmChoice } from "../confirm-choice/ConfirmChoice";
import { Message } from "./Message";

export class WinnerChoice {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  private selectElement: HTMLSelectElement;
  private sectionName: string;
  constructor() {
    this.sectionName = "winner-choice";
    this.hostElement = document.getElementById(
      "truth-or-dare"
    )! as HTMLDivElement;
    this.element = document.createElement("div");
    this.element.className = this.sectionName;
    this.setMessage();
    this.selectBox();
    this.button();
    this.selectElement = this.element.querySelector(
      ".winner-choice__select-box__select"
    )! as HTMLSelectElement;
    this.attach();
  }

  private attach() {
    this.hostElement.appendChild(this.element);
  }

  private setMessage() {
    this.element.appendChild(Message.firstLine(this.sectionName));
    this.element.appendChild(Message.secondLine(this.sectionName));
    this.element.appendChild(Message.thirdLine(this.sectionName));
  }

  private selectBox() {
    const selectList = [
      "今日の出来事",
      "黒歴史",
      "昨日した失敗",
      "3サイズ",
      "恥ずかしいこという",
      "なんで昨日遅刻した？",
    ];

    const sectionName = `${this.sectionName}__select-box`;
    const selectBox = document.createElement("div");
    selectBox.className = sectionName;

    const title = document.createElement("p");
    title.className = `${sectionName}__title`;
    title.innerText = choice.truthOrDare;

    const select = document.createElement("select");
    select.className = `${sectionName}__select`;
    select.size = 5;

    for (let i = 0; i < selectList.length; i++) {
      const option = document.createElement("option");
      option.className = `${sectionName}__option`;
      option.value = selectList[i];
      option.innerText = selectList[i];

      select.appendChild(option);
    }

    selectBox.appendChild(title);
    selectBox.appendChild(select);

    this.element.appendChild(selectBox);
  }

  private button() {
    const sectionName = `${this.sectionName}__button`;
    const button = document.createElement("button");
    button.className = sectionName;
    button.innerText = `この${choice.truthOrDare}を指示する`;
    button.addEventListener("click", this.getSelectValue.bind(this));

    this.element.appendChild(button);
  }

  private getSelectValue() {
    choice.command = this.selectElement.value;
    this.element.classList.add("fade-out");
    setTimeout(() => {
      this.hostElement.removeChild(this.element);
      new ConfirmChoice();
    }, 500);
  }
}
