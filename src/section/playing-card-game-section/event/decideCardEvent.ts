import { playingCardGameSectionUserStatus } from "../../../status/user";
import { Card } from "../component/Card";
import { Bubble } from "../component/Bubble";
import { Label } from "../component/Label";
import { JudgeEvent } from "./JudgeEvent";

export class DecideCardEvent {
  secondUserName: string;
  constructor(firstUserName: string, card: Card, bubble: Bubble) {
    this.secondUserName = playingCardGameSectionUserStatus.secondUser.name;
    this.configure(firstUserName, card, bubble);
  }

  configure(firstUserName: string, card: Card, bubble: Bubble) {
    bubble.getDecideCardButton.addEventListener(
      "click",
      this.eventHandler.bind(this, firstUserName, card, bubble)
    );
  }

  eventHandler(firstUserName: string, card: Card, bubble: Bubble) {
    if (this.firstEventValid(card)) {
      this.firstEvent(firstUserName, card, bubble);
    } else if (this.secondEventValid(card)) {
      this.secondEvent(card, bubble);
    } else {
    }
  }

  firstEvent(firstUserName: string, card: Card, bubble: Bubble) {
    const decideCard = document.querySelector(".--selected")! as HTMLLIElement;
    playingCardGameSectionUserStatus.firstUser.decideCard = decideCard.id;
    card.addDecideClass(firstUserName);
    card.lock();
    bubble.hide();
    new Label(this.secondUserName);
    setTimeout(() => {
      bubble.fadeIn(this.secondUserName);
      card.unLock();
    }, 2400);
  }

  secondEvent(card: Card, bubble: Bubble) {
    const decideCard = document.querySelector(".--selected")! as HTMLLIElement;
    playingCardGameSectionUserStatus.secondUser.decideCard = decideCard.id;
    const firstUserDecidedCardId =
      playingCardGameSectionUserStatus.firstUser.decideCard;
    const secondUserDecidedCardId = decideCard.id;
    card.addDecideClass(this.secondUserName);
    card.lock();
    card.addNumber();
    bubble.destroy();
    setTimeout(() => {
      card.turn(firstUserDecidedCardId, secondUserDecidedCardId);
    }, 500);
    new JudgeEvent(firstUserDecidedCardId, secondUserDecidedCardId);
  }

  firstEventValid(card: Card) {
    return (
      !playingCardGameSectionUserStatus.firstUser.decideCard &&
      !playingCardGameSectionUserStatus.secondUser.decideCard &&
      this.findOfSelected(card)
    );
  }

  secondEventValid(card: Card) {
    return (
      playingCardGameSectionUserStatus.firstUser.decideCard &&
      !playingCardGameSectionUserStatus.secondUser.decideCard &&
      this.findOfSelected(card)
    );
  }

  findOfSelected(card: Card): boolean {
    let flag = false;
    card.getCardList.forEach((value) => {
      if (value.classList.contains("--selected")) {
        flag = true;
      }
    });
    return flag;
  }
}
