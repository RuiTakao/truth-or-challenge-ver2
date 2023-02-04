import { Card } from "./Card";
import { Label } from "./Label";
import { Bubble } from "./Bubble";
import { AddSelectClassEvent } from "./event/selectCardEvent";
import { RemoveSelectClassEvent } from "./event/RemoveSelectClassEvent";
import { DecideCardEvent } from "./event/decideCardEvent";

export class App {
  card: Card;
  bubble: Bubble;
  constructor() {
    this.card = new Card();
    this.bubble = new Bubble();
    this.card.hide();
    this.card.lock();
    this.card.attach();
    this.card.slideInRight();
    setTimeout(() => {
        new Label("aaa");
    }, 3600);
    setTimeout(() => {
        this.bubble.attach();
        this.bubble.hide();
        this.bubble.fadeIn();
        new AddSelectClassEvent(this.bubble, this.card);
        new RemoveSelectClassEvent(this.bubble, this.card);
        new DecideCardEvent(this.card, this.bubble);
    }, 6000);
  }
}
