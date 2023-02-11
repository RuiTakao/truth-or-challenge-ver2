import { Card } from "../components/Card";
import { users } from "../../../status/user";
import { User } from "../../../interface/User";

export class ThirdStage {
  constructor( card: Card) {
    const firstUser: User = users.firstUser;
    const secondUser:User = users.secondUser;

    card.addNumber();
    card.turn(firstUser.decideCard, secondUser.decideCard);
  }
}
