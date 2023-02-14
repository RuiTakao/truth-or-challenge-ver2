import { User } from "../../interface/User";
import { userStatus } from "../../status/user";
import { CreateNumber } from "../modules/CreateNumber";

export class Card {
  private hostElement: HTMLDivElement;
  private element: HTMLUListElement;
  private card: NodeListOf<HTMLLIElement>;

  get cardListElement() {
    return this.element;
  }

  get cardElement() {
    return this.card;
  }

  constructor() {
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.hostElement.appendChild(this.createElement());
    this.card = this.element.querySelectorAll("li");

    this.slideInRight();
  }

  lock() {
    this.card.forEach((value) => {
      value.classList.add("--lock");
    });
  }

  unLock() {
    this.card.forEach((value) => {
      value.classList.remove("--lock");
    });
  }

  addSelectClass(value: HTMLLIElement) {
    this.removeSelectClass();
    value.classList.add("--selected");
  }

  removeSelectClass() {
    this.card.forEach((value) => {
      if (value.classList.contains("--selected")) {
        value.classList.remove("--selected");
      }
    });
  }

  addDecideClass(user: User) {
    this.card.forEach((value) => {
      if (value.classList.contains("--selected")) {
        user.decideCard = value.id;
        value.classList.add("--decided");
        value.classList.remove("--selected");

        // name-front-side
        const nameFrontSide = document.createElement("p");
        nameFrontSide.className = "name__front-side";
        nameFrontSide.innerText = user.name;

        // name-back-side
        const nameBackSide = document.createElement("p");
        nameBackSide.className = "name__back-side";
        nameBackSide.innerText = user.name;

        // check-mark
        const checkMark = document.createElement("div");
        checkMark.className = "check-mark";

        // append
        value.appendChild(nameFrontSide);
        value.appendChild(nameBackSide);
        value.appendChild(checkMark);
      }
    });
  }

  addNumber() {
    const createNumber = new CreateNumber(this);
    const numbers = createNumber.array;
    this.card.forEach((value, index) => {
      const num = document.createElement("p");
      num.className = "num";
      num.innerText = numbers[index].toString();
      value.appendChild(num);
    });
  }

  turn() {
    const firstUserDecidedCard = document.getElementById(
      userStatus.firstUser.decideCard
    )! as HTMLLIElement;
    const secondUserDecidedCard = document.getElementById(
      userStatus.secondUser.decideCard
    )! as HTMLLIElement;
    firstUserDecidedCard.classList.add("--turn");
    setTimeout(() => {
      secondUserDecidedCard.classList.add("--turn");
    }, 500);
    setTimeout(() => {
      firstUserDecidedCard.classList.remove("--decided");
      secondUserDecidedCard.classList.remove("--decided");
    }, 1000);
  }

  private createElement(): HTMLUListElement {
    const sectionName = "playing-card-game";
    const cardList = document.createElement("ul");
    cardList.className = `${sectionName}__card-list`;
    for (let i = 1; i <= 13; i++) {
      const card = document.createElement("li");
      card.id = `card${i}`;
      card.className = `${sectionName}__card`;
      card.classList.add("--hide");
      card.classList.add("--lock");
      cardList.appendChild(card);
    }
    return cardList;
  }

  private slideInRight() {
    this.card.forEach((value) => {
      value.classList.add("--slide-in-right");
      setTimeout(() => {
        value.classList.remove("--hide");
        value.classList.remove("--slide-in-right");
      }, 3500);
    });
  }
}
