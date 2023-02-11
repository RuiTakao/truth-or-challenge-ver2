import { User } from "../../../interface/User";
import { SetDecidedCard } from "../modules/SetDecidedCard";
import { Card } from "../components/Card";
import { Bubble } from "../components/Bubble";
import { SecondStage } from "../stages/SecondStage";
import { ThirdStage } from "../stages/ThirdStage";

export class YesButtonClick {
  static firstStage(fistUser: User, card: Card, bubble: Bubble) {
    bubble.yesButtonElement.addEventListener(
      "click",
      () => {
        new SetDecidedCard(fistUser);
        bubble.destroy();
        card.lock();
        card.addDecideClass(fistUser.name);
        new SecondStage(card);
      },
      { once: true }
    );
  }

  static secondStage(secondUser: User, card: Card, bubble: Bubble) {
    bubble.yesButtonElement.addEventListener(
      "click",
      () => {
        new SetDecidedCard(secondUser);
        bubble.destroy();
        card.lock();
        card.addDecideClass(secondUser.name);
        new ThirdStage(card);
      },
      { once: true }
    );
  }
}
