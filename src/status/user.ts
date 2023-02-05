export interface User {
  name: string;
  decideCard: string;
}

export const nameEntrySectionUserStatus: { firstUser: User; secondUser: User } =
  {
    firstUser: {
      name: "",
      decideCard: "",
    },
    secondUser: {
      name: "",
      decideCard: "",
    },
  };

export const playingCardGameSectionUserStatus: {
  firstUser: User;
  secondUser: User;
} = {
  firstUser: {
    name: "takao",
    decideCard: "",
  },
  secondUser: {
    name: "kennya",
    decideCard: "",
  },
};

export const choiceTruthOrChallengeSectionUserStatus: {
  winner: User;
  loser: User;
} = {
  winner: {
    name: "",
    decideCard: "",
  },
  loser: {
    name: "",
    decideCard: "",
  },
};
