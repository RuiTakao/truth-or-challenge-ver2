import { Card } from "../components/Card";

export class CreateNumber {
  private numbers: number[];

  get array() {
    return this.numbers;
  }

  constructor(card: Card) {
    this.numbers = [];
    for (let i = 1; i <= card.cardElement.length; i++) {
      this.numbers.push(i);
    }
    this.numbers.sort(() => 0.5 - Math.random());
  }
}