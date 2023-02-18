import { Bubble } from "./components/Bubble";
import { FirstInput } from "./components/input/FirstInput";
import { Button } from "./components/Button";
import { ButtonClick } from "./event-listeners/ButtonElement";
import { InputElement } from "./event-listeners/InputElement";

export class NameEntry {
  constructor() {
    // bubbleコンポーネント作成、表示
    const bubble = new Bubble(
      "対戦者名が表示されるよ\n1人目のプレーヤー名を入力して\nクリックしてね！"
    );

    // inputコンポーネント作成、表示
    const input = new FirstInput();

    // buttonコンポーネント作成、表示
    const button = new Button();

    // inputにイベント追加
    input.inputElement.addEventListener(
      "input",
      InputElement.addEventListeners.bind(input, input.inputElement, button)
    );

    // buttonにイベント追加
    button.buttonElement.addEventListener(
      "click",
      ButtonClick.firstAddEventListeners.bind(button, bubble, input, button),
      { once: true }
    );
  }
}
