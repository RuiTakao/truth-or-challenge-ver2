import { NameEntrySection } from "./section/name-entry-section/nameEntrySection";
import { TruthOrChallenge } from "./section/truth-or-challenge/TruthOrChallenge";
import { App as PlayingCardGameSection } from "./section/playing-card-game-section/App";

class App {
  constructor() {
    // new NameEntrySection();
    // new PlayingCardGameSection();
    // new TruthOrChallenge();

    new PlayingCardGameSection();
  }
}

new App();
