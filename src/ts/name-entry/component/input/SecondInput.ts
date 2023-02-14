export class SecondInput {
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
    this.slideInLeft();
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  private slideInLeft() {
    this.element.classList.add("--slide-in-left");
    setTimeout(() => {
      this.unLock();
    }, 1500);
  }

  private unLock() {
    this.element.classList.remove("--lock");
  }

  private createElement(): HTMLInputElement {
    const sectionName = "name-entry";
    const nameInput = document.createElement("input");
    nameInput.className = `${sectionName}__input`;
    nameInput.type = "text";
    nameInput.maxLength = 5;
    nameInput.classList.add("--hide");
    nameInput.classList.add("--lock");
    nameInput.classList.add("--right-side");
    return nameInput;
  }
}
