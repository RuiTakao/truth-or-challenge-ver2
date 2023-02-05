import { Card } from "../component/Card";
import { Bubble } from "../component/Bubble";

export class AddSelectClassEvent {
  constructor(bubble: Bubble, card: Card) {
    this.configure(bubble, card);
  }

  configure(bubble: Bubble, card: Card) {
    card.getCardList.forEach((value) => {
      value.addEventListener("click", () => {
        bubble.openEventButton();
        bubble.vibe();
        card.removeSelectClass();
        card.addSelectClass(value);
      });
    });
  }
}
