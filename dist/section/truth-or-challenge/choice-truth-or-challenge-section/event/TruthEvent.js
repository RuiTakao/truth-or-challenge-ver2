export class TruthEvent {
    constructor() {
        this.button = document.getElementById("truth-event");
        this.configure();
    }
    configure() {
        this.button.addEventListener("click", this.eventHandler.bind(this));
    }
    eventHandler() {
        console.log('truth event');
    }
}
//# sourceMappingURL=TruthEvent.js.map