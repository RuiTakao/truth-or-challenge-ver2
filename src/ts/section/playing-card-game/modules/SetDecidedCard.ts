import { User } from "../../../interface/User";
export class SetDecidedCard {
  constructor(user: User) {
    const decideCard = document.querySelector(
      ".--selected"
    )! as HTMLLIElement;
    user.decideCard = decideCard.id;
  }
}
