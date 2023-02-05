import { Card } from "../component/Card";
import { Bubble } from "../component/Bubble";

export class RemoveSelectClassEvent {
  constructor(bubble: Bubble, card: Card) {
    this.configure(bubble, card);
  }

  configure(bubble: Bubble, card: Card) {
    bubble.getRemoveSelectClassButton.addEventListener("click", () => {
      bubble.closeEventButton();
      bubble.vibe();
      card.removeSelectClass();
    });
  }
}