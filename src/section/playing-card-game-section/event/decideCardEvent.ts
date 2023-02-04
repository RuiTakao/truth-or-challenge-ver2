import { playingCardGameSectionUserStatus } from "../../../status/user";
import { SecondAnimationOfPlayingCardGameSection } from "../animation/SecondAnimationOfPlayingCardGameSection";
import { ThirdAnimationOfPlayingCardGameSection } from "../animation/ThirdAnimationOfPlayingCardGameSection";
import { Card } from "../Card";
import { Bubble } from "../Bubble";
import { Label } from "../Label";

export class DecideCardEvent {
  bubble: Bubble;
  constructor(card: Card, bubble: Bubble) {
    this.bubble = new Bubble();
    this.configure(card, bubble);
  }

  configure(card: Card, bubble: Bubble) {
    bubble.getDecideCardButton.addEventListener('click', () => {
      card.getCardList.forEach((value) => {
        if (value.classList.contains('--selected')) {
          value.classList.add('--decided');
        }
      })
      bubble.destroy();
      new Label("bbb");

      setTimeout(() => {
        this.bubble.attach();
        this.bubble.hide();
        this.bubble.fadeIn();
      }, 3000)
    })
  }
}
