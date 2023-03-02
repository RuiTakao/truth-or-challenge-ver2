import { userStatus } from "../../status/user";
import { TruthOrDare } from "../../truth-or-dare/TruthOrDare";
import { Bubble } from "../components/Bubble";
import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Judge } from "../modules/Judge";
import { CardElement } from "./CardElement";
import { NoButtonElement } from "./NoButtonElement";

export class YesButtonElement {
  static firstAddEventListeners(card: Card, bubble: Bubble) {
    bubble.yesButtonElement.addEventListener(
      "click",
      () => {
        // カードにディサイドクラス付ける
        card.addDecideClass(userStatus.firstUser);

        // バブル削除
        bubble.destroy();

        // カードをロックする
        card.lock();

        // ラベル表示させる
        new Label(userStatus.secondUser);
        setTimeout(() => {
          // バブル表示
          const bubble = new Bubble(userStatus.secondUser);

          // カードロック解除
          card.unLock();

          // カードにイベント処理追加
          CardElement.secondAddEventListeners(card, bubble);

          // 「いいえ」ボタンにイベント処理追加
          NoButtonElement.addEventListeners(card, bubble);

          // 「はい」ボタンにイベント処理追加
          YesButtonElement.secondAddEventListeners(card, bubble);
        }, 2400);
      },
      { once: true }
    );
  }

  static secondAddEventListeners(card: Card, bubble: Bubble) {
    bubble.yesButtonElement.addEventListener(
      "click",
      () => {
        // カードにディサイドクラス付ける
        card.addDecideClass(userStatus.secondUser);

        // バブル削除
        bubble.destroy();

        // カードをロックする
        card.lock();

        // カードに番号振る
        card.addNumber();

        // カードをひっくり返す
        card.turn();

        // 勝敗判定
        new Judge();

        setTimeout(() => {
          new TruthOrDare();
        }, 750);
      },
      { once: true }
    );
  }
}
