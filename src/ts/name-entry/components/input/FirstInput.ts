export class FirstInput {
  private hostElement: HTMLDivElement;
  private element: HTMLInputElement;

  get inputElement() {
    return this.element;
  }

  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.hostElement.appendChild(
      this.createElement()
    ) as HTMLInputElement;
    this.element.focus();
  }

  lock() {
    this.element.classList.add('--lock');
  }

  slideOutLeft() {
    this.element.classList.add('--slide-out-left');
    setTimeout(() => {
      this.hostElement.removeChild(this.element);
    }, 1500);
  }

  private createElement(): HTMLInputElement {
    const sectionName = "name-entry";

    // input
    const element = document.createElement("input");
    element.className = `${sectionName}__input`;
    element.type = "text";
    element.maxLength = 5;

    return element;
  }
}
