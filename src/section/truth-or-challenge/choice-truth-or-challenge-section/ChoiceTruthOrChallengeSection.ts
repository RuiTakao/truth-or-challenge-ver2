import { choiceTruthOrChallengeSectionUserStatus } from "../../../status/user.js";
import { TruthEvent } from "./event/TruthEvent.js";
import { ChallengeEvent } from "./event/ChallengeEvent.js";

export class ChoiceTruthOrChallenge {
  hostElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLDivElement;
  text1: HTMLParagraphElement;
  text2: HTMLParagraphElement;
  eventContainer: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById(
      "truth-or-callenge-app"
    )! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "choice-truth-or-callenge-template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = "choice-truth-or-challenge";
    this.text1 = this.element.querySelector(
      ".choice-truth-or-callenge-section__message--text1"
    )! as HTMLParagraphElement;
    this.text2 = this.element.querySelector(
      ".choice-truth-or-callenge-section__message--text2"
    )! as HTMLParagraphElement;
    this.eventContainer = this.element.querySelector(
      ".choice-truth-or-callenge-section__event-container"
    )! as HTMLDivElement;

    this.attach();
    this.init();
    this.animation();
  }

  attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  init() {
    this.text1.classList.add('--hide');
    this.text2.classList.add('--hide');
    this.eventContainer.classList.add('--hide');
  }

  animation() {
    setTimeout(() => {
      this.text1.classList.add('--fade-in');
      setTimeout(() => {
        this.text1.classList.remove('--hide');
      }, 100);
      setTimeout(() => {
        this.text1.classList.remove('--fade-in');
      }, 750);
    }, 100);
    setTimeout(() => {
      this.text2.classList.add('--fade-in');
      setTimeout(() => {
        this.text2.classList.remove('--hide');
      }, 100);
      setTimeout(() => {
        this.text2.classList.remove('--fade-in');
      }, 750);
    }, 850);
    setTimeout(() => {
      this.eventContainer.classList.add('--fade-in');
      setTimeout(() => {
        this.eventContainer.classList.remove('--hide');
      }, 100);
      setTimeout(() => {
        this.eventContainer.classList.remove('--fade-in');
      }, 750);
      this.event();
    }, 1600);
  }

  event() {
    new TruthEvent();
    new ChallengeEvent();
  }
}
