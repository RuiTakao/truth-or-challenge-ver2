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
  }

  lock() {
    this.element.classList.add('--lock');
  }

  slideOutLeft() {
    this.element.classList.add('--slide-out-left');
    setTimeout(() => {
      this.destroy();
    }, 1500);
  }

  private destroy() {
    this.hostElement.removeChild(this.element);
  }

  private createElement(): HTMLInputElement {
    const sectionName = "name-entry";
    const nameInput = document.createElement("input");
    nameInput.className = `${sectionName}__input`;
    nameInput.type = "text";
    nameInput.maxLength = 5;
    return nameInput;
  }
}
