import { AnimationOfNameEntrySection } from "./AnimationOfNameEntrySection.js";
import { CloseNameEntrySection } from "../closeNameEntrySection.js";
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
        window.alert('end');
    }
    setButton() {
        this.button.classList.add("--lock");
    }
    setEnterInputStatus() {
        this.enterSecondInput.classList.add("--lock");
    }
    enterInputAnimation() {
        this.enterSecondInput.classList.add("--slideOut");
    }
    bubbleAnimation() {
        this.bubble.classList.add("--fadeOut");
    }
}
//# sourceMappingURL=ThirdAnimationOfNameEntrySection.js.map