import { choiceTruthOrChallengeSectionUserStatus } from "../../../../status/user.js";
import { selectOrder } from "../../../../status/trutOrChallenge.js";

export class SecondAnimationOfOerderTruthContentSection {
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  text1: HTMLParagraphElement;
  text2: HTMLParagraphElement;
  text3: HTMLParagraphElement;
  constructor() {
    this.hostElement = document.getElementById(
      "order-truth-content"
    )! as HTMLDivElement;
    this.element = this.hostElement.querySelector(
      ".order-truth-content-second"
    )! as HTMLDivElement;
    this.text1 = this.element.querySelector(
      ".order-truth-content-second__message--text1"
    )! as HTMLParagraphElement;
    this.text2 = this.element.querySelector(
      ".order-truth-content-second__message--text2"
    )! as HTMLParagraphElement;
    this.text3 = this.element.querySelector(
      ".order-truth-content-second__message--text3"
    )! as HTMLParagraphElement;

    this.init();
    this.animation();
  }

  init() {
    this.text1.innerText = choiceTruthOrChallengeSectionUserStatus.loser.name;
    this.text2.innerText =
      choiceTruthOrChallengeSectionUserStatus.winner.name + "からの指示です。";
  }

  animation() {
    this.text3.innerText = selectOrder.truth + 'についての"真実"をお願いします';
    this.element.style.display = "block";
  }
}
