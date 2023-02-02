import { choiceTruthOrChallengeSectionUserStatus } from "../../../../status/user.js";
import { selectOrder } from "../../../../status/trutOrChallenge.js";
export class SecondAnimationOfOerderTruthContentSection {
    constructor() {
        this.hostElement = document.getElementById("order-truth-content");
        this.element = this.hostElement.querySelector(".order-truth-content-second");
        this.text1 = this.element.querySelector(".order-truth-content-second__message--text1");
        this.text2 = this.element.querySelector(".order-truth-content-second__message--text2");
        this.text3 = this.element.querySelector(".order-truth-content-second__message--text3");
        this.init();
        this.animation();
    }
    init() {
        this.text1.innerText = choiceTruthOrChallengeSectionUserStatus.loser.name;
        this.text2.innerText =
            choiceTruthOrChallengeSectionUserStatus.winner.name + "からの指示です。";
    }
    animation() {
        this.text3.innerText = selectOrder.truth + 'についての"真実"をお願いします';
        this.element.style.display = "block";
    }
}
//# sourceMappingURL=SecondAnimationOfOrderTruthContentSection.js.map