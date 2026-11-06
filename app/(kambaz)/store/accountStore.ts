import { create } from "zustand";

export interface User {
  username: string;
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
}

const knownUsers: (User & { password: string })[] = [
  {
    username: "alice",
    password: "123",
    firstName: "Alice",
    lastName: "Wonderland",
    dob: "2000-01-01",
    email: "alice@wonderland",
    role: "FACULTY",
  },
  {
    username: "ada",
    password: "123",
    firstName: "Ada",
    lastName: "Lovelace",
    dob: "2000-01-01",
    email: "ada@lovelace",
    role: "STUDENT",
  },
];

interface AccountState {
  currentUser: User | null;
  signin: (username: string, password: string) => boolean;
  signout: () => void;
}

export const useAccountStore = create<AccountState>((set) => ({
  currentUser: null,
  signin: (username, password) => {
    const match = knownUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (!match) return false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...user } = match;
    set({ currentUser: user });
    return true;
  },
  signout: () => set({ currentUser: null }),
}));
