

export class CloseNameEntrySection {
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = document.getElementById(
      "name-entry-section"
    ) as HTMLDivElement;

    this.destroy();
    this.next();
  }

  destroy() {
    this.hostElement.removeChild(this.element);
  }

  next() {
  }
}
