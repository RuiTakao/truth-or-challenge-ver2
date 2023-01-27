export class ChallengeEvent {
    constructor() {
        this.button = document.getElementById("challenge-event");
        this.configure();
    }
    configure() {
        this.button.addEventListener("click", this.eventHandler.bind(this));
    }
    eventHandler() {
        console.log("challenge event");
    }
}
//# sourceMappingURL=ChallengeEvent.js.map