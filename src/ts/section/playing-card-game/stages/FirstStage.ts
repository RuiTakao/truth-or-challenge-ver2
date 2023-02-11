import { User } from "../../../interface/User";
import { UserShuffle } from "../modules/UserShuffle";
import { users } from "../../../status/user";
import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Bubble } from "../components/Bubble";
import { CardClick } from "../eventListeners/CardClick";
import { NoButtonClick } from "../eventListeners/NoButtonClick";
import { YesButtonClick } from "../eventListeners/YesButtonClick";

export class FirstStage {
  constructor() {
    new UserShuffle();
    const firstUser: User = users.firstUser;
    const card = new Card();
    card.lock();
    setTimeout(() => {
      new Label(firstUser.name);
    }, 3600);
    setTimeout(() => {
      const bubble = new Bubble(firstUser.name);
      card.unLock();
      CardClick.cardMotion(card);
      CardClick.bubbleMotion(card, bubble);
      new NoButtonClick(card, bubble);
      YesButtonClick.firstStage(firstUser, card, bubble);
    }, 6000);
  }
}
