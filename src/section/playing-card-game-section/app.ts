import { Card } from "./Card";
import { Label } from "./Label";
import { Bubble } from "./Bubble";
import { CardSelectEvent } from "./event/selectCardEvent";

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
        new CardSelectEvent(this.bubble, this.card);
    }, 6000);
  }
}
