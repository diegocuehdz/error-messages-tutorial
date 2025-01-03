type User = {
  name: string;
  age?: number;
};

type UserRecord = Record<string, number | string>;

const user: UserRecord = {
  name: "Matt",
};

user.age = 24;
