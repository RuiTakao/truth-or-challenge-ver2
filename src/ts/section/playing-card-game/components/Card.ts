export class Card {
  private hostElement: HTMLDivElement;
  private templateElement: HTMLTemplateElement;
  private element: HTMLDivElement;
  private cardList: NodeListOf<HTMLLIElement>;

  get cardListElement() {
    return this.cardList;
  }

  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.templateElement = document.getElementById(
      "playing-card-game-section__card__template"
    )! as HTMLTemplateElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;

    this.cardList = this.element.querySelectorAll(
      ".card"
    )! as NodeListOf<HTMLLIElement>;

    this.hide();
    this.attach();
    this.slideInRight();
  }

  lock() {
    this.cardList.forEach((value) => {
      value.classList.add("--lock");
    });
  }

  unLock() {
    this.cardList.forEach((value) => {
      value.classList.remove("--lock");
    });
  }

  addSelectClass(value: HTMLLIElement) {
    this.removeSelectClass();
    value.classList.add("--selected");
  }

  removeSelectClass() {
    this.cardList.forEach((value) => {
      if (value.classList.contains("--selected")) {
        value.classList.remove("--selected");
      }
    });
  }

  addDecideClass(userName: string) {
    this.cardList.forEach((value) => {
      if (value.classList.contains("--selected")) {
        value.classList.add("--decided");
        value.classList.remove("--selected");
        const nameFrontSide = value.querySelector(
          ".name__front-side"
        )! as HTMLParagraphElement;
        const nameBacktSide = value.querySelector(
          ".name__back-side"
        )! as HTMLParagraphElement;
        nameFrontSide.innerText = userName;
        nameBacktSide.innerText = userName;
      }
    });
  }

  addNumber() {
    const numbers: number[] = this.createNumber();
    this.cardList.forEach((value, index) => {
      const num = value.querySelector(".num")! as HTMLParagraphElement;
      num.innerText = numbers[index].toString();
    });
  }

  turn(firstUserDecidedCardId: string, secondUserDecidedCardId: string) {
    const firstUserDecidedCard = document.getElementById(
      firstUserDecidedCardId
    )! as HTMLLIElement;
    const secondUserDecidedCard = document.getElementById(
      secondUserDecidedCardId
    )! as HTMLLIElement;
    firstUserDecidedCard.classList.add("--turn");
    setTimeout(() => {
      secondUserDecidedCard.classList.add("--turn");
    }, 500);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  private slideInRight() {
    this.cardList.forEach((value) => {
      value.classList.add("--moving");
      setTimeout(() => {
        value.classList.remove("--hide");
        value.classList.remove("--moving");
      }, 3500);
    });
  }

  private hide() {
    this.cardList.forEach((value) => {
      value.classList.add("--hide");
    });
  }

  private createNumber(): number[] {
    const numbers: number[] = [];
    for (let i = 1; i <= this.cardList.length; i++) {
      numbers.push(i);
    }
    numbers.sort(() => 0.5 - Math.random());
    return numbers;
  }
}
