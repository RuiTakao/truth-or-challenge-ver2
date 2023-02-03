import { playingCardGameSectionUserStatus } from "../../../status/user";
import { message } from "../../../util/text-list";
import { ClosePlayingCardGameSection } from "../closePlayingCardGameSection";
import { TruthOrChallenge } from "../../truth-or-challenge/TruthOrChallenge";

export class ThirdAnimationOfPlayingCardGameSection {
  sectionElement: HTMLDivElement;
  bubble: HTMLDivElement;
  card: NodeListOf<HTMLLIElement>;
  selectedCardOfFirstUser: HTMLLIElement;
  selectedCardOfSecondtUser: HTMLLIElement;
  usernameOnSelectedCard: string;

  constructor() {
    this.sectionElement = document.getElementById(
      "playing-card-game-section"
    )! as HTMLDivElement;
    this.bubble = this.sectionElement.querySelector(
      ".playing-card-game-section__bubble"
    )! as HTMLDivElement;
    const cardList = this.sectionElement.querySelector(
      ".playing-card-game-section__card-list"
    )! as HTMLUListElement;
    this.card = cardList.querySelectorAll(
      ".card"
    )! as NodeListOf<HTMLLIElement>;
    this.selectedCardOfFirstUser = document.getElementById(
      playingCardGameSectionUserStatus.firstUser.decideCard
    )! as HTMLLIElement;
    this.selectedCardOfSecondtUser = document.getElementById(
      playingCardGameSectionUserStatus.secondUser.decideCard
    )! as HTMLLIElement;
    this.usernameOnSelectedCard =
      playingCardGameSectionUserStatus.secondUser.name;

    this.init();
    this.animation();
  }

  init() {
    this.bubbleInit();
    this.cardInit();
  }

  animation() {
    this.cardAnimation();
    setTimeout(() => {
      new ClosePlayingCardGameSection();
      new TruthOrChallenge();
    }, 1500);
  }

  private bubbleInit() {
    this.sectionElement.removeChild(this.bubble);
  }

  private cardInit() {
    this.selectedCardOfSecondtUser.classList.remove("--selected");
    this.selectedCardOfSecondtUser.classList.add("--decided");
    const nameOnCard_front = this.selectedCardOfSecondtUser.querySelector(
      ".name__front-side"
    )! as HTMLParagraphElement;
    const nameOnCard_back = this.selectedCardOfSecondtUser.querySelector(
      ".name__back-side"
    )! as HTMLParagraphElement;
    nameOnCard_front.innerText = this.usernameOnSelectedCard;
    nameOnCard_back.innerText = this.usernameOnSelectedCard;
    this.card.forEach((value) => {
      value.classList.add("--lock");
    });
    this.addNumberOfCard();
  }

  private cardAnimation() {
    setTimeout(() => {
      this.selectedCardOfFirstUser.classList.add("--turn");
      setTimeout(() => {
        this.selectedCardOfSecondtUser.classList.add("--turn");
      }, 500);
    }, 500);
  }

  private createNumber(): number[] {
    const numbers: number[] = [];
    for (let i = 1; i <= this.card.length; i++) {
      numbers.push(i);
    }
    numbers.sort(() => 0.5 - Math.random());
    return numbers;
  }

  private addNumberOfCard() {
    const numbers: number[] = this.createNumber();
    this.card.forEach((value, index) => {
      const num = value.querySelector(".num")! as HTMLParagraphElement;
      num.innerText = numbers[index].toString();
    });
  }
}
