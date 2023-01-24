import { playingCardGameSectionUserStatus } from "../../../status/user.js";
import { message} from "../../../util/text-list.js";
import { OpeningMessageLabel } from "./label/OpeningMessageLabel.js";

export class SecondAnimationOfPlayingCardGameSection {
  username: string;
  sectionElement: HTMLDivElement;
  bubble: HTMLDivElement;
  bubbleText: HTMLParagraphElement;
  buttonContent: HTMLDivElement;
  card: NodeListOf<HTMLLIElement>;
  selectedCard: HTMLLIElement;
  usernameOnSelectedCard: string;

  constructor() {
    this.username = playingCardGameSectionUserStatus.secondUser.name;
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
    const cardList = this.sectionElement.querySelector(
      ".playing-card-game-section__card-list"
    )! as HTMLUListElement;
    this.card = cardList.querySelectorAll(
      ".card"
    )! as NodeListOf<HTMLLIElement>;
    this.selectedCard = document.getElementById(
      playingCardGameSectionUserStatus.firstUser.decideCard
    )! as HTMLLIElement;
    this.usernameOnSelectedCard =
      playingCardGameSectionUserStatus.firstUser.name;

    this.init();
    this.animation();
  }

  init() {
    this.bubbleInit();
    this.cardInit();
  }

  animation() {
    this.cardAnimation();
    new OpeningMessageLabel(this.username);
    setTimeout(() => {
      this.bubbleAnimation();
    }, 3500);
  }

  private bubbleInit() {
    this.bubbleText.innerText =
      this.username + message.playingCardGameSectionMessage;
    this.bubble.style.display = "none";
    this.bubble.classList.add("--hide");
    this.bubbleText.style.display = "block";
    this.buttonContent.style.display = "none";
  }

  private cardInit() {
    this.selectedCard.classList.remove("--selected");
    this.selectedCard.classList.add("--decided");
    const nameOnCard_front = this.selectedCard.querySelector(
      ".name__front-side"
    )! as HTMLParagraphElement;
    const nameOnCard_back = this.selectedCard.querySelector(
      ".name__back-side"
    )! as HTMLParagraphElement;
    nameOnCard_front.innerText = this.usernameOnSelectedCard;
    nameOnCard_back.innerText = this.usernameOnSelectedCard;
    this.card.forEach((value) => {
      value.classList.add("--lock");
    });
  }

  private bubbleAnimation() {
    this.bubble.style.display = "block";
    setTimeout(() => {
      this.bubble.classList.add("--fadeIn");
    }, 100);
    setTimeout(() => {
      this.bubble.classList.remove("--hide");
    }, 200);
  }

  private cardAnimation() {
    setTimeout(() => {
      this.card.forEach((value) => {
        value.classList.remove("--lock");
      });
    }, 3500);
  }
}
