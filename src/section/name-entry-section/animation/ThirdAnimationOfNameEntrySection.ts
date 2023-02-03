import { AnimationOfNameEntrySection } from "./AnimationOfNameEntrySection";
import { CloseNameEntrySection } from "../closeNameEntrySection";

export class ThirdAnimationOfNameEntrySection extends AnimationOfNameEntrySection {
  constructor() {
    super();

    this.init();
    this.animation();
  }

  init() {
    this.setButton();
    this.setEnterInputStatus();
  }

  animation() {
    this.enterInputAnimation();
    this.bubbleAnimation();
    setTimeout(() => {
        new CloseNameEntrySection();
    }, 1500);
  }

  next() {
    window.alert('end')
  }

  private setButton() {
    this.button.classList.add("--lock");
  }

  private setEnterInputStatus() {
    this.enterSecondInput.classList.add("--lock");
  }

  private enterInputAnimation() {
    this.enterSecondInput.classList.add("--slideOut");
  }

  private bubbleAnimation() {
    this.bubble.classList.add("--fadeOut");
  }
}
