export class SelectCardEvent {
    constructor() {
        this.hostElement = document.getElementById("app");
        const cardList = this.hostElement.querySelector(".playing-card-game-section__card-list");
        this.card = cardList.querySelectorAll(".card");
        this.bubble = this.hostElement.querySelector(".playing-card-game-section__bubble");
        this.bubbleText = this.bubble.querySelector(".playing-card-game-section__bubble__text");
        this.buttonContent = this.bubble.querySelector(".playing-card-game-section__event-content");
        this.configure();
    }
    configure() {
        this.card.forEach((value) => {
            value.addEventListener("click", () => {
                this.cardAddSelectType(value);
                this.bubbleEventAnimation();
            });
        });
    }
    clickHandler() { }
    cardAddSelectType(value) {
        this.cardRemoveSelectType();
        value.classList.add("--selected");
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
        if (this.buttonContent.style.display === "none") {
            this.bubbleText.style.display = "none";
            this.buttonContent.style.display = "block";
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
//# sourceMappingURL=selectCardEvent.js.map