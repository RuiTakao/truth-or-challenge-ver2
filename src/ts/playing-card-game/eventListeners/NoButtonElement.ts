import { Bubble } from "../components/Bubble";
import { Card } from "../components/Card";

export class NoButtonElement {
  static addEventListeners(card: Card, bubble: Bubble) {
    // ボタンリストを非表示にさせる
    bubble.noButtonElement.addEventListener(
      "click",
      bubble.closeEventButton.bind(bubble)
    );
    // カードのセレクトクラス外す
    bubble.noButtonElement.addEventListener(
      "click",
      card.removeSelectClass.bind(card)
    );
  }
}
