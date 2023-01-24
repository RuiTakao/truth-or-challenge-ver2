export class ClearCardOfSelectTypeEvent {
  hostElement: HTMLDivElement;
  button: HTMLButtonElement;
  card: NodeListOf<HTMLLIElement>;
  bubble: HTMLDivElement;
  bubbleText: HTMLParagraphElement;
  buttonContent: HTMLDivElement;
  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.button = document.getElementById(
      "playing-card-game-section__clear-card-of-select-type-event"
    )! as HTMLButtonElement;
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
    this.button.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler() {
    this.cardRemoveSelectType();
    this.bubbleEventAnimation();
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
    if (this.buttonContent.style.display === "block") {
      this.bubbleText.style.display = "block";
      this.buttonContent.style.display = "none";
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
