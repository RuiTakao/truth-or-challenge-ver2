import { Bubble } from "./component/Bubble";
import { FirstInput } from "./component/input/FirstInput";
import { Button } from "./component/Button";
import { ButtonClick } from "./event-listeners/ButtonClick";

export class NameEntry {
  constructor() {
    const bubble = new Bubble("対戦者名が表示されるよ\n1人目のプレーヤー名を入力して\nクリックしてね！");
    const input = new FirstInput();
    const button = new Button();
    button.buttonElement.addEventListener(
      "click",
      ButtonClick.first.bind(this, bubble, input, button),
      { once: true }
    );
  }
}
