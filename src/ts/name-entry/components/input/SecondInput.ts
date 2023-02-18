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
      this.element.classList.remove("--lock");
      this.element.focus();
    }, 1500);
  }

  private createElement(): HTMLInputElement {
    const sectionName = "name-entry";

    // input
    const element = document.createElement("input");
    element.className = `${sectionName}__input`;
    element.type = "text";
    element.maxLength = 5;
    element.classList.add("--hide");
    element.classList.add("--lock");
    element.classList.add("--right-side");

    return element;
  }
}
