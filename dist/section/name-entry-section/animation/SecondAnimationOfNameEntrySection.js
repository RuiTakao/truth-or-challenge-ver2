import { message } from "../../../util/text-list.js";
import { EnterSecondPlayerNameEvent } from "../event/EnterSecondPlayerNameEvent.js";
import { AnimationOfNameEntrySection } from "./AnimationOfNameEntrySection.js";
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
    setButton() {
        this.button.classList.add("--lock");
    }
    setEnterInputStatus() {
        this.enterSecondInput.style.display = "block";
        this.enterSecondInput.classList.add("--rightSide");
    }
    enterFirstInputAnimation() {
        this.enterFirstInput.classList.add("--slideOut");
        setTimeout(() => {
            const parentNode = this.sectionElement.querySelector(".name-entry-section__name-entry-event__content");
            parentNode.removeChild(this.enterFirstInput);
        }, 2200);
    }
    enterSecondInputAnimation() {
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
    bubbleAnimation() {
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
//# sourceMappingURL=SecondAnimationOfNameEntrySection.js.map