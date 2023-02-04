import { Card } from "../Card";
import { Bubble } from "../Bubble";

export class RemoveSelectClassEvent {
  constructor(bubble: Bubble, card: Card) {
    this.configure(bubble, card);
  }

  configure(bubble: Bubble, card: Card) {
    bubble.getRemoveSelectClassButton.addEventListener("click", () => {
      bubble.closeEventButton();
      card.removeSelectClass();
    });
  }
}
