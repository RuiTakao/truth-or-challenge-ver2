import { userStatus } from "../status/user";
import { User } from "../interface/User";
import { UserShuffle } from "./modules/UserShuffle";
import { Bubble } from "./components/Bubble";
import { Card } from "./components/Card";
import { Label } from "./components/Label";
import { CardElement } from "./eventListeners/CardElement";
import { NoButtonElement } from "./eventListeners/NoButtonElement";
import { YesButtonElement } from "./eventListeners/YesButtonElement";

export class PlayingCardGame {
  constructor() {
    // ユーザーシャッフル
    new UserShuffle();

    // カードコンポーネント作成
    const card = new Card();

    setTimeout(() => {
      // ラベルコンポーネント作成
      new Label(userStatus.firstUser);
    }, 3600);

    setTimeout(() => {
      // バブルコンポーネント作成
      const bubble = new Bubble(userStatus.firstUser);

      // カードロック解除
      card.unLock();

      // カードにイベント処理追加
      CardElement.firstAddEventListeners(card, bubble);

      // 「いいえ」ボタンにイベント処理追加
      NoButtonElement.addEventListeners(card, bubble);

      // 「はい」ボタンにイベント処理追加
      YesButtonElement.firstAddEventListeners(card, bubble);
    }, 6000);
  }
}