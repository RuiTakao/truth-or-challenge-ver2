import { userStatus } from "../../status/user";
import { FirstInput } from "../component/input/FirstInput";
import { SecondInput } from "../component/input/SecondInput";
import { Bubble } from "../component/Bubble";
import { Button } from "../component/Button";
import { PlayingCardGame } from "../../playing-card-game/PlayingCardGame";

export class ButtonClick {
  static first(firstBubble: Bubble, firstInput: FirstInput, button: Button) {
    if (firstInput.inputElement.value.length > 1) {
      firstInput.lock();
      userStatus.firstUser.name = firstInput.inputElement.value;
      firstInput.slideOutLeft();
      firstBubble.fadeOut();

      const secondInput = new SecondInput();
      setTimeout(() => {
        const secondBubble = new Bubble("2人目のプレイヤー名を入力して\nクリックしてね！");
        button.buttonElement.addEventListener(
          "click",
          ButtonClick.second.bind(this, secondBubble, secondInput, button),
          { once: true }
        );
      }, 1000);
    }
  }

  static second(
    secondBubble: Bubble,
    secondInput: SecondInput,
    button: Button
  ) {
    userStatus.secondUser.name = secondInput.inputElement.value;
    secondInput.destroy();
    secondBubble.destroy();
    button.destroy();
    new PlayingCardGame();
  }
}
