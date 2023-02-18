export class WhiteBg {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.createElement();
    this.hostElement.appendChild(this.element);
  }

  fadeIn() {
    this.element.classList.add('--fade-in');
  }

  private createElement(): HTMLDivElement {
    const truthOrDare = document.createElement("div");
    truthOrDare.id = "truth-or-dare";
    truthOrDare.className = "white-bg";

    return truthOrDare;
  }
}
