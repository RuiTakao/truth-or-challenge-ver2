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

    this.lock();
  }

  lock() {
    this.element.classList.add('--lock');
  }

  unlock() {
    this.element.classList.remove('--lock');
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  private createElement(): HTMLButtonElement {
    const sectionName = "name-entry";

    // button
    const element = document.createElement("button");
    element.className = `${sectionName}__button`;
    element.innerText = "クリック";

    return element;
  }
}
