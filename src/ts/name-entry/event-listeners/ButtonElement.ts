import { userStatus } from "../../status/user";
import { FirstInput } from "../components/input/FirstInput";
import { SecondInput } from "../components/input/SecondInput";
import { Bubble } from "../components/Bubble";
import { Button } from "../components/Button";
import { PlayingCardGame } from "../../playing-card-game/PlayingCardGame";
import { InputElement } from "./InputElement";

export class ButtonClick {
  static firstAddEventListeners(
    firstBubble: Bubble,
    firstInput: FirstInput,
    button: Button
  ) {
    // inputが二文字未満ならbutton押せない設定
    if (firstInput.inputElement.value.length > 1) {

      // 入力された名前を登録
      userStatus.firstUser.name = firstInput.inputElement.value;

      // ボタンロック
      button.lock();

      // 最初のinputオブジェクトをロック
      firstInput.lock();

      // 最初のinputオブジェクトを左にスライドさせて消す
      firstInput.slideOutLeft();

      // bubbleをフェードアウトさせて消す
      firstBubble.fadeOut();

      // 二つ目のinputを作成、左にスライドさせて表示
      const secondInput = new SecondInput();

      setTimeout(() => {

        // 二つ目のbubbleを表示
        const secondBubble = new Bubble(
          "2人目のプレイヤー名を入力して\nクリックしてね！"
        );

        // inputにイベント追加
        secondInput.inputElement.addEventListener(
          "input",
          InputElement.addEventListeners.bind(
            secondInput,
            secondInput.inputElement,
            button
          )
        );

        // buttonにイベント追加
        button.buttonElement.addEventListener(
          "click",
          ButtonClick.secondAddEventListeners.bind(
            button,
            secondBubble,
            secondInput,
            button
          ),
          { once: true }
        );
      }, 1000);
    }
  }

  static secondAddEventListeners(
    secondBubble: Bubble,
    secondInput: SecondInput,
    button: Button
  ) {
    if (secondInput.inputElement.value.length > 1) {

      // 入力された名前を登録
      userStatus.secondUser.name = secondInput.inputElement.value;

      // input消す
      secondInput.destroy();

      // bubble消す
      secondBubble.destroy();

      // button消す
      button.destroy();

      // PlayingCardGame開始
      new PlayingCardGame();
    }
  }
}
