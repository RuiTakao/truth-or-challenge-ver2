import { Card } from "../components/Card";
import { Bubble } from "../components/Bubble";

export class NoButtonClick {
  constructor(card: Card, bubble: Bubble) {
    bubble.noButtonElement.addEventListener("click", () => {
      card.removeSelectClass();
      bubble.closeEventButton();
    });
  }
}
