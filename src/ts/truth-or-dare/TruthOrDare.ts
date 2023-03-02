import { LoserChoice } from "./loser-choice/LoserChoice";

export class TruthOrDare {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = document.createElement('div');
    this.element.id = "truth-or-dare";
    this.element.className = "white-bg";
    this.hostElement.appendChild(this.element);

    new LoserChoice();
  }
}
