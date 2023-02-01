import { choiceTruthOrChallengeSectionUserStatus } from "../../../../status/user.js";
import { truthList } from "../../../../status/trutOrChallenge.js";
import { DecideTruthEvent } from "../event/DecideTruthEvent.js";

export class FirstAnimationOfOerderTruthContentSection {
  select: HTMLSelectElement;
  text2: HTMLParagraphElement;
  text3: HTMLParagraphElement;
  constructor() {
    this.select = document.querySelector(
      ".order-truth-content__select-list-input"
    )! as HTMLSelectElement;
    this.text2 = document.querySelector(
      ".order-truth-content-first__message--text2"
    )! as HTMLParagraphElement;
    this.text3 = document.querySelector(
      ".order-truth-content-first__message--text3"
    )! as HTMLParagraphElement;

    this.init();
    this.animation();
  }

  init() {
    this.text2.innerText = choiceTruthOrChallengeSectionUserStatus.winner.name;
    this.text3.innerHTML =
      choiceTruthOrChallengeSectionUserStatus.loser.name +
      'に指示する"真実"を選んでください';
  }

  animation() {
    for (let i = 0; i < truthList.length; i++) {
      const option = document.createElement("option");
      option.innerText = truthList[i];
      option.value = truthList[i];
      this.select.appendChild(option);
    }
    this.next();
  }

  next() {
    new DecideTruthEvent();
  }
}
