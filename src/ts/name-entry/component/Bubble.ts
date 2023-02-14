export class Bubble {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  constructor(message: string) {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.hostElement.appendChild(this.createElement(message));
    this.hide();
    this.fadeIn();
  }

  createElement(message: string): HTMLDivElement {
    const sectionName = "name-entry";
    const bubble = document.createElement("div");
    const body = document.createElement("div");
    const arrow = document.createElement("div");
    const arrowShadow = document.createElement("div");
    const text = document.createElement("p");
    bubble.className = `${sectionName}__bubble`;
    body.className = `${sectionName}__bubble__body`;
    arrow.className = `${sectionName}__bubble__arrow`;
    arrowShadow.className = `${sectionName}__bubble__arrow__shadow`;
    text.className = `${sectionName}__bubble__text`;
    text.innerText = message;
    text.classList.add(this.setMessage(message));
    bubble.appendChild(body);
    bubble.appendChild(arrow);
    bubble.appendChild(arrowShadow);
    bubble.appendChild(text);
    return bubble;
  }

  private isCheckTextLength(message: string): number {
    const array = message.split("\n");
    return array.length;
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

  hide() {
    this.element.classList.add("--hide");
  }

  fadeIn() {
    this.element.classList.add("--fade-in");
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
}
