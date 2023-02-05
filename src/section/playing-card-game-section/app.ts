import { playingCardGameSectionUserStatus } from "../../status/user";
import { Card } from "./component/Card";
import { Label } from "./component/Label";
import { Bubble } from "./component/Bubble";
import { AddSelectClassEvent } from "./event/AddSelectCardEvent";
import { RemoveSelectClassEvent } from "./event/RemoveSelectClassEvent";
import { DecideCardEvent } from "./event/DecideCardEvent";

export class App {
  firstUserName: string;
  card: Card;
  bubble: Bubble;
  constructor() {
    this.firstUserName = playingCardGameSectionUserStatus.firstUser.name;
    this.card = new Card();
    this.bubble = new Bubble();

    this.attach();
  }

  attach() {
    setTimeout(() => {
      new Label(this.firstUserName);
    }, 3600);
    setTimeout(() => {
      this.bubble.fadeIn(this.firstUserName);
      this.card.unLock();
      new AddSelectClassEvent(this.bubble, this.card);
      new RemoveSelectClassEvent(this.bubble, this.card);
      new DecideCardEvent(this.firstUserName, this.card, this.bubble);
    }, 6000);
  }
}
