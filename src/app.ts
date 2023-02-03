import { NameEntrySection } from "./section/name-entry-section/nameEntrySection";
import { PlayingCardGameSection } from "./section/playing-card-game-section/playingCardGameSection";
import { TruthOrChallenge } from "./section/truth-or-challenge/TruthOrChallenge";

class App {
  constructor() {
    new NameEntrySection();
    // new PlayingCardGameSection();
    // new TruthOrChallenge();
  }
}

new App();
