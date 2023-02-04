import { Card } from "./Card";
import { Label } from "./Label";
import { Bubble } from "./Bubble";
import { AddSelectClassEvent } from "./event/selectCardEvent";
import { RmoveSelectClassEvent } from "./event/RemoveSelectClassEvent";

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
        new RmoveSelectClassEvent(this.bubble, this.card);
    }, 6000);
  }
}
