import { playingCardGameSectionUserStatus } from "../../../status/user";
import { SecondAnimationOfPlayingCardGameSection } from "../animation/SecondAnimationOfPlayingCardGameSection";
import { ThirdAnimationOfPlayingCardGameSection } from "../animation/ThirdAnimationOfPlayingCardGameSection";

export class DecideCardEvent {
  hostElement: HTMLDivElement;
  button: HTMLButtonElement;
  cardList: HTMLUListElement;
  card: NodeListOf<HTMLLIElement>;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.button = document.getElementById(
      "playing-card-game-section__decided-card-event"
    )! as HTMLButtonElement;
    this.cardList = this.hostElement.querySelector(
      ".playing-card-game-section__card-list"
    )! as HTMLUListElement;
    this.card = this.cardList.querySelectorAll(
      ".card"
    )! as NodeListOf<HTMLLIElement>;

    this.configure();
  }

  configure() {
    this.button.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler() {
    if (this.setFirstUserValidation()) {
      this.setFirstUser();
    } else if (this.setSecondUserValidation()) {
      this.setSecondUser();
    } else {
      return;
    }
  }

  private setFirstUser() {
    const setCard = this.cardList.querySelector(
      ".--selected"
    )! as HTMLLIElement;
    playingCardGameSectionUserStatus.firstUser.decideCard = setCard.id;
    new SecondAnimationOfPlayingCardGameSection();
    console.log("first event success");
    console.log(playingCardGameSectionUserStatus);
  }

  private setSecondUser() {
    const setCard = this.cardList.querySelector(
      ".--selected"
    )! as HTMLLIElement;
    if (playingCardGameSectionUserStatus.firstUser.decideCard !== setCard.id) {
      playingCardGameSectionUserStatus.secondUser.decideCard = setCard.id;
      new ThirdAnimationOfPlayingCardGameSection();
      console.log("second event success");
      console.log(playingCardGameSectionUserStatus);
    }
  }

  private setFirstUserValidation(): boolean {
    return (
      !playingCardGameSectionUserStatus.firstUser.decideCard &&
      !playingCardGameSectionUserStatus.secondUser.decideCard &&
      this.cardList.querySelectorAll(".--selected").length === 1
    );
  }

  private setSecondUserValidation(): boolean {
    return (
      playingCardGameSectionUserStatus.firstUser.decideCard !== "" &&
      !playingCardGameSectionUserStatus.secondUser.decideCard &&
      this.cardList.querySelectorAll(".--selected").length === 1
    );
  }
}
