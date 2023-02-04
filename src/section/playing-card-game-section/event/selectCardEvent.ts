import { Card } from "../Card";
import { Bubble } from "../Bubble";

export class AddSelectClassEvent {
  constructor(bubble: Bubble, card: Card) {
    this.configure(bubble, card);
    console.log(card)
    console.log(bubble)
  }

  configure(bubble: Bubble, card: Card) {
    card.getCardList.forEach((value) => {
      value.addEventListener("click", () => {
        bubble.openEventButton();
        card.removeSelectClass();
        card.addSelectClass(value);
      });
    });
  }
}
