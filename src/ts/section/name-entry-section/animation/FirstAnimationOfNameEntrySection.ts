import { message, button } from "../../../util/text-list";
import { AnimationOfNameEntrySection } from "./AnimationOfNameEntrySection";
import { EnterFirstPlayerNameEvent } from "../event/EnterFirstPlayerNameEvent";
import { EnterPlayerNameAndDecideEvent } from "../event/EnterPlayerNameAndDecideEvent";

export class FirstAnimationOfNameEntrySection extends AnimationOfNameEntrySection {
    constructor() {
      super();
  
      this.init();
      this.animation();
      new EnterFirstPlayerNameEvent();
      new EnterPlayerNameAndDecideEvent();
    }
  
    init() {
      this.setButton();
      this.setEnterInputStatus();
      this.setBubbleStatus();
      this.setBubbleText();
    }
  
    animation() {
      this.bubble.classList.add("--fadeIn");
      setTimeout(() => {
        this.bubble.classList.remove("--hide");
      }, 500);
    }
  
    private setEnterInputStatus() {
      this.enterFirstInput.classList.add("--center");
      this.enterSecondInput.style.display = "none";
      this.enterSecondInput.classList.add("--hide");
      this.enterSecondInput.classList.add("--lock");
    }
  
    private setBubbleStatus() {
      this.bubble.classList.add("--hide");
    }
  
    private setBubbleText() {
      this.bubbleText.innerText = message.nameEntrySectionFirstMessage;
      this.bubbleText.style.top = "1em";
    }
  
    private setButton() {
      this.button.classList.add("--lock");
      this.button.innerText = button.enterPlayerNameAndDecideButtonText;
    }
  }