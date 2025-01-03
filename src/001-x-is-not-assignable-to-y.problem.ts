interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark" | "blue"; // add it so that it doesnt error
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};
