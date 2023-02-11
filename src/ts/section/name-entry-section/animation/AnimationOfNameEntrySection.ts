export abstract class AnimationOfNameEntrySection {
  sectionElement: HTMLDivElement;
  bubble: HTMLDivElement;
  bubbleText: HTMLParagraphElement;
  enterFirstInput: HTMLInputElement;
  enterSecondInput: HTMLInputElement;
  button: HTMLButtonElement;
  constructor() {
    this.sectionElement = document.getElementById(
      "name-entry-section"
    )! as HTMLDivElement;
    this.bubble = this.sectionElement.querySelector(
      ".name-entry-section__bubble"
    )! as HTMLDivElement;
    this.bubbleText = this.bubble.querySelector(
      ".name-entry-section__bubble__text"
    )! as HTMLParagraphElement;
    this.enterFirstInput = document.getElementById(
      "enter-first-player-name-event"
    )! as HTMLInputElement;
    this.enterSecondInput = document.getElementById(
      "enter-second-player-name-event"
    )! as HTMLInputElement;
    this.button = document.getElementById(
      "enter-player-name-and-decide-event"
    )! as HTMLButtonElement;
  }

  abstract init(): void;

  abstract animation(): void;
}


