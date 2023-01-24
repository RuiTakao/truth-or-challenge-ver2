export class SelectCardEvent {
  hostElement: HTMLDivElement;
  card: NodeListOf<HTMLLIElement>;
  bubble: HTMLDivElement;
  bubbleText: HTMLParagraphElement;
  buttonContent: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    const cardList = this.hostElement.querySelector(
      ".playing-card-game-section__card-list"
    )! as HTMLUListElement;
    this.card = cardList.querySelectorAll(
      ".card"
    )! as NodeListOf<HTMLLIElement>;
    this.bubble = this.hostElement.querySelector(
      ".playing-card-game-section__bubble"
    )! as HTMLDivElement;
    this.bubbleText = this.bubble.querySelector(
      ".playing-card-game-section__bubble__text"
    )! as HTMLParagraphElement;
    this.buttonContent = this.bubble.querySelector(
      ".playing-card-game-section__event-content"
    )! as HTMLDivElement;

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

  clickHandler() {}

  private cardAddSelectType(value: HTMLLIElement) {
    this.cardRemoveSelectType();
    value.classList.add("--selected");
  }

  private cardRemoveSelectType() {
    this.card.forEach((value) => {
      if (value.classList.contains("--selected")) {
        value.classList.remove("--selected");
      }
    });
  }

  private bubbleEventAnimation() {
    this.bubbleVibe();
    if (this.buttonContent.style.display === "none") {
      this.bubbleText.style.display = "none";
      this.buttonContent.style.display = "block";
    }
  }

  private bubbleVibe() {
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
