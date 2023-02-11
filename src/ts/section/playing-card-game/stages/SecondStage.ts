import { User } from "../../../interface/User";
import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Bubble } from "../components/Bubble";
import { CardClick } from "../eventListeners/CardClick";
import { NoButtonClick } from "../eventListeners/NoButtonClick";
import { YesButtonClick } from "../eventListeners/YesButtonClick";
import { users } from "../../../status/user";

export class SecondStage {
  constructor(card: Card) {
    const secondUser: User = users.secondUser;

    setTimeout(() => {
      new Label(secondUser.name);
    }, 500);
    setTimeout(() => {
      const bubble = new Bubble(secondUser.name);
      card.unLock();
      CardClick.bubbleMotion(card, bubble);
      new NoButtonClick(card, bubble);
      YesButtonClick.secondStage(secondUser, card, bubble);
    }, 2900);
  }
}
