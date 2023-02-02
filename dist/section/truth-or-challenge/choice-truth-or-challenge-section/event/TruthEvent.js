import { OrderTruthContent } from "../../order-truth-content-section/OrderTruthContent.js";
export class TruthEvent {
    constructor() {
        this.hostElement = document.getElementById("truth-or-callenge-app");
        this.element = document.getElementById("choice-truth-or-challenge");
        this.button = document.getElementById("choice-truth-event");
        this.configure();
    }
    configure() {
        this.button.addEventListener("click", this.eventHandler.bind(this));
    }
    eventHandler() {
        this.destroyElement();
        new OrderTruthContent();
    }
    destroyElement() {
        this.hostElement.removeChild(this.element);
    }
}
//# sourceMappingURL=TruthEvent.js.map