export class ClearCardOfSelectTypeEvent {
    constructor() {
        this.hostElement = document.getElementById("app");
        this.button = document.getElementById("playing-card-game-section__clear-card-of-select-type-event");
        const cardList = this.hostElement.querySelector(".playing-card-game-section__card-list");
        this.card = cardList.querySelectorAll(".card");
        this.bubble = this.hostElement.querySelector(".playing-card-game-section__bubble");
        this.bubbleText = this.bubble.querySelector(".playing-card-game-section__bubble__text");
        this.buttonContent = this.bubble.querySelector(".playing-card-game-section__event-content");
        this.configure();
    }
    configure() {
        this.button.addEventListener("click", this.clickHandler.bind(this));
    }
    clickHandler() {
        this.cardRemoveSelectType();
        this.bubbleEventAnimation();
    }
    cardRemoveSelectType() {
        this.card.forEach((value) => {
            if (value.classList.contains("--selected")) {
                value.classList.remove("--selected");
            }
        });
    }
    bubbleEventAnimation() {
        this.bubbleVibe();
        if (this.buttonContent.style.display === "block") {
            this.bubbleText.style.display = "block";
            this.buttonContent.style.display = "none";
        }
    }
    bubbleVibe() {
        this.bubble.classList.add("--rightRotate");
        setTimeout(() => {
            this.bubble.classList.remove("--rightRotate");
            this.bubble.classList.add("--leftRotate");
        }, 100);
        setTimeout(() => {
            this.bubble.classList.remove("--leftRotate");
        }, 200);
    }
}
//# sourceMappingURL=clearCardOfSelectTypeEvent.js.map