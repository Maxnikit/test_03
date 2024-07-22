import { create } from "zustand";
import { User } from "../types";

interface UserStore {
  users: User[];

  updateUsers: (newUsers: User[]) => void;
}

export const useStore = create<UserStore>((set) => ({
  users: [],

  updateUsers: (newUsers) => set({ users: newUsers }),
}));
