import { Bubble } from "../components/Bubble";
import { Card } from "../components/Card";

export class CardElement {
  static firstAddEventListeners(card: Card, bubble: Bubble) {
    card.cardElement.forEach((value) => {
      // ボタンリストを表示させる
      value.addEventListener("click", bubble.openEventButton.bind(bubble));

      // カードにセレクトクラス付ける
      value.addEventListener("click", card.addSelectClass.bind(card, value));
    });
  }

  static secondAddEventListeners(card: Card, bubble: Bubble) {
    card.cardElement.forEach((value) => {
      // ボタンリストを表示させる
      value.addEventListener("click", bubble.openEventButton.bind(bubble));
    });
  }
}
