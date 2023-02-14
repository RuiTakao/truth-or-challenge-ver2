export class Button {
  private hostElement: HTMLDivElement;
  private element: HTMLButtonElement;

  get buttonElement() {
    return this.element;
  }

  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.hostElement.appendChild(
      this.createElement()
    )! as HTMLButtonElement;
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  createElement(): HTMLButtonElement {
    const sectionName = "name-entry";
    const setButton = document.createElement("button");
    setButton.className = `${sectionName}__button`;
    setButton.innerText = "クリック";
    return setButton;
  }
}
