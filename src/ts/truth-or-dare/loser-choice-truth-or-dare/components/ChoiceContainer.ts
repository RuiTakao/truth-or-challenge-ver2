import { winLoseStatus } from "../../../status/user";

export class ChoiceContainer {
  private sectionName: string;
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  private truthButton: HTMLButtonElement;
  private dareButton: HTMLButtonElement;

  get truthButtonElement() {
    return this.truthButton;
  }

  constructor() {
    this.sectionName = "loser-choice-truth-or-dare";
    this.hostElement = document.getElementById(
      "truth-or-dare"
    )! as HTMLDivElement;

    this.element = this.createElement();
    this.truthButton = this.createTruthButton();
    this.dareButton = this.createDareButton();

    const buttonContainer = this.createButtonContainerElement();
    buttonContainer.appendChild(this.truthButton);
    buttonContainer.appendChild(this.dareButton);

    this.element.appendChild(buttonContainer);
    this.hostElement.appendChild(this.element);
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  createElement() {
    const element = document.createElement("div");
    element.className = this.sectionName;

    const loserName = document.createElement("p");
    loserName.className = `${this.sectionName}__loser-name`;
    loserName.innerText = `${winLoseStatus.loseUser.name}`;

    element.appendChild(loserName);

    element.appendChild(this.createMessageElement());

    return element;
  }

  createMessageElement() {
    const element = document.createElement("p");
    element.className = `${this.sectionName}__message`;

    const truth = document.createElement("span");
    truth.className = `${this.sectionName}__message__truth`;
    truth.innerText = "真実";

    const second = document.createElement("span");
    second.className = `${this.sectionName}__message__second`;
    second.innerText = "か";

    const dare = document.createElement("span");
    dare.className = `${this.sectionName}__message__dare`;
    dare.innerText = "挑戦";

    const fourth = document.createElement("span");
    fourth.className = `${this.sectionName}__message__fourth`;
    fourth.innerText = "を";

    const fifth = document.createElement("span");
    fifth.className = `${this.sectionName}__message__fifth`;
    fifth.innerText = "選んでください";

    element.appendChild(truth);
    element.appendChild(second);
    element.appendChild(dare);
    element.appendChild(fourth);
    element.appendChild(fifth);

    return element;
  }

  createButtonContainerElement() {
    const element = document.createElement("div");
    element.className = `${this.sectionName}__button-container`;

    return element;
  }

  createTruthButton() {
    const element = document.createElement("button");
    element.className = `${this.sectionName}__button-container__truth-button`;
    element.innerText = "真実";

    return element;
  }

  createDareButton() {
    const element = document.createElement("button");
    element.className = `${this.sectionName}__button-container__dare-button`;
    element.innerText = "挑戦";

    return element;
  }
}
