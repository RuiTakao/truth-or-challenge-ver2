import { OrderChallengeContent } from "../../order-challenge-content-section/OrderChallengeContent.js";
export class ChallengeEvent {
    constructor() {
        this.hostElement = document.getElementById("truth-or-callenge-app");
        this.element = document.getElementById("choice-truth-or-challenge");
        this.button = document.getElementById("choice-challenge-event");
        this.configure();
    }
    configure() {
        this.button.addEventListener("click", this.eventHandler.bind(this));
    }
    eventHandler() {
        this.destroyElement();
        new OrderChallengeContent();
    }
    destroyElement() {
        this.hostElement.removeChild(this.element);
    }
}
//# sourceMappingURL=ChallengeEvent.js.map