import { Card } from "../Card";
import { Bubble } from "../Bubble";

export class CardSelectEvent {
  constructor(bubble: Bubble, card: Card) {
    this.configure(bubble, card);
    console.log(card)
    console.log(bubble)
  }

  configure(bubble: Bubble, card: Card) {
    card.card.forEach((value) => {
      value.addEventListener("click", () => {
        bubble.cardClickHandler();
        card.removeSelectClass();
        card.addSelectClass(value);
      });
    });
  }
}
