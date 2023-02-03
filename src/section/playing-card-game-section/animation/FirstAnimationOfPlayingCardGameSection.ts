import { playingCardGameSectionUserStatus } from "../../../status/user";
import { message, button } from "../../../util/text-list";
import { SelectCardEvent } from "../event/selectCardEvent";
import { DecideCardEvent } from "../event/decideCardEvent";
import { OpeningMessageLabel } from "./label/OpeningMessageLabel";
import { ClearCardOfSelectTypeEvent } from "../event/clearCardOfSelectTypeEvent";

export class FirstAnimationOfPlayingCardGameSection {
  username: string;
  sectionElement: HTMLDivElement;
  bubble: HTMLDivElement;
  bubbleText: HTMLParagraphElement;
  buttonContent: HTMLDivElement;
  buttonContentText: HTMLParagraphElement;
  decideCardEventButton: HTMLButtonElement;
  clearCardOfSelectTypeEventButton: HTMLButtonElement;
  card: NodeListOf<HTMLLIElement>;
  constructor() {
    this.username = playingCardGameSectionUserStatus.firstUser.name;
    this.sectionElement = document.getElementById(
      "playing-card-game-section"
    )! as HTMLDivElement;
    this.bubble = this.sectionElement.querySelector(
      ".playing-card-game-section__bubble"
    )! as HTMLDivElement;
    this.bubbleText = this.bubble.querySelector(
      ".playing-card-game-section__bubble__text"
    )! as HTMLParagraphElement;
    this.buttonContent = this.bubble.querySelector(
      ".playing-card-game-section__event-content"
    )! as HTMLDivElement;
    this.buttonContentText = this.buttonContent.querySelector(
      ".playing-card-game-section__event-content__text"
    )! as HTMLParagraphElement;
    this.decideCardEventButton = document.getElementById(
      "playing-card-game-section__decided-card-event"
    )! as HTMLButtonElement;
    this.clearCardOfSelectTypeEventButton = document.getElementById(
      "playing-card-game-section__clear-card-of-select-type-event"
    )! as HTMLButtonElement;
    const cardList = this.sectionElement.querySelector(
      ".playing-card-game-section__card-list"
    )! as HTMLUListElement;
    this.card = cardList.querySelectorAll(
      ".card"
    )! as NodeListOf<HTMLLIElement>;

    this.init();
    this.animation();
    new SelectCardEvent();
    new DecideCardEvent();
    new ClearCardOfSelectTypeEvent();
  }

  init() {
    this.bubbleInit();
    this.cardInit();
  }

  animation() {
    this.cardAnimation();
    setTimeout(() => {
      new OpeningMessageLabel(this.username);
    }, 3500);
    setTimeout(() => {
      this.bubbleAnimation();
    }, 6000);
  }

  private bubbleInit() {
    this.bubbleText.innerText =
      this.username + message.playingCardGameSectionMessage;
    this.buttonContent.style.display = "none";
    this.buttonContentText.innerText =
      message.playingCardGameSectionButtonMessage;
    this.decideCardEventButton.innerText = button.decideCardEventButtonText;
    this.clearCardOfSelectTypeEventButton.innerText =
      button.clearCardOfSelectTypeEventButtonText;
    this.bubble.classList.add("--hide");
  }

  private cardInit() {
    this.card.forEach((value) => {
      value.classList.add("--hide");
      value.classList.add("--lock");
    });
  }

  private bubbleAnimation() {
    this.bubble.classList.add("--fadeIn");
    setTimeout(() => {
      this.bubble.classList.remove("--hide");
    }, 100);
  }

  private cardAnimation() {
    this.card.forEach((value) => {
      value.classList.add("--moving");
      setTimeout(() => {
        value.classList.remove("--hide");
        value.classList.remove("--moving");
      }, 3500);
      setTimeout(() => {
        value.classList.remove("--lock");
      }, 6000);
    });
  }
}
