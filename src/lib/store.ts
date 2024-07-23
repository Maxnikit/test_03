import { create } from "zustand";
import { User } from "../types";

interface UserStore {
  users: User[];

  updateUsers: (newUsers: User[]) => void;

  getSingleUser: (id: number) => User | undefined;
}

export const useStore = create<UserStore>((set, get) => ({
  users: [],

  updateUsers: (newUsers) => set({ users: newUsers }),
  getSingleUser: (id) =>
    get().users.find((user) => user.id === id) || undefined,
}));
