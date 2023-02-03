import { message, button } from "../../../util/text-list";
import { EnterSecondPlayerNameEvent } from "../event/EnterSecondPlayerNameEvent";
import { AnimationOfNameEntrySection } from "./AnimationOfNameEntrySection";

export class SecondAnimationOfNameEntrySection extends AnimationOfNameEntrySection {
    constructor() {
      super();
  
      this.init();
      this.animation();
      new EnterSecondPlayerNameEvent();
    }
  
    init() {
      this.setButton();
      this.setEnterInputStatus();
    }
  
    animation() {
      this.enterFirstInputAnimation();
      this.enterSecondInputAnimation();
      this.bubbleAnimation();
    }
  
    private setButton() {
      this.button.classList.add("--lock");
    }
  
    private setEnterInputStatus() {
      this.enterSecondInput.style.display = "block";
      this.enterSecondInput.classList.add("--rightSide");
    }
  
    private enterFirstInputAnimation() {
      this.enterFirstInput.classList.add("--slideOut");
      setTimeout(() => {
        const parentNode = this.sectionElement.querySelector(
          ".name-entry-section__name-entry-event__content"
        )! as HTMLDivElement;
        parentNode.removeChild(this.enterFirstInput);
      }, 2200);
    }
  
    private enterSecondInputAnimation() {
      this.enterSecondInput.classList.add("--slideIn");
      setTimeout(() => {
        this.enterSecondInput.classList.remove("--lock");
      }, 1200);
      setTimeout(() => {
        this.enterSecondInput.classList.add("--center");
      }, 2200);
      setTimeout(() => {
        this.enterSecondInput.classList.remove("--hide");
        this.enterSecondInput.classList.remove("--rightSide");
        this.enterSecondInput.classList.remove("--slideIn");
      }, 2300);
    }
  
    private bubbleAnimation() {
      this.bubble.classList.add("--fadeOut");
      setTimeout(() => {
        this.bubbleText.innerText = message.nameEntrySectionSecondMessage;
        this.bubbleText.style.top = "2em";
      }, 900);
      setTimeout(() => {
        this.bubble.classList.remove("--fadeOut");
      }, 1200);
    }
  }