import { Card } from "../components/Card";
import { Bubble } from "../components/Bubble";

export class CardClick {
  static cardMotion(card: Card) {
    card.cardListElement.forEach((element) => {
      element.addEventListener("click", () => {
        card.addSelectClass(element);
      });
    });
  }
  static bubbleMotion(card: Card, bubble: Bubble) {
    card.cardListElement.forEach((element) => {
      element.addEventListener("click", () => {
        bubble.openEventButton();
      });
    });
  }
}
