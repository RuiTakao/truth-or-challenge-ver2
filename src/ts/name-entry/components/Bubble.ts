export class Bubble {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  constructor(message: string) {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.hostElement.appendChild(this.createElement(message));
  }

  fadeOut() {
    this.element.classList.add("--fade-out");
    setTimeout(() => {
      this.destroy();
    }, 1500);
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  private createElement(message: string): HTMLDivElement {
    const sectionName = "name-entry";

    // bubble
    const element = document.createElement("div");
    element.className = `${sectionName}__bubble`;

    // body
    const body = document.createElement("div");
    body.className = `${sectionName}__bubble__body`;

    // arrow
    const arrow = document.createElement("div");
    arrow.className = `${sectionName}__bubble__arrow`;

    // arrow shadow
    const arrowShadow = document.createElement("div");
    arrowShadow.className = `${sectionName}__bubble__arrow__shadow`;

    // text
    const text = document.createElement("p");
    text.className = `${sectionName}__bubble__text`;
    text.innerText = message;
    text.classList.add(this.setMessage(message));

    // append
    element.appendChild(body);
    element.appendChild(arrow);
    element.appendChild(arrowShadow);
    element.appendChild(text);
    return element;
  }

  private setMessage(message: string): string {
    if (this.isCheckTextLength(message) === 3) {
      return "--three-line";
    } else if (this.isCheckTextLength(message) === 2) {
      return "--two-line";
    } else {
      return "--one-line";
    }
  }

  private isCheckTextLength(message: string): number {
    const array = message.split("\n");
    return array.length;
  }
}
