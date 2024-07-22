import { create } from "zustand";
import { User } from "../types";

interface UserStore {
  users: User[];
  filteredUsers: User[];
  updateUsers: (newUsers: User[]) => void;
  updateFilteredUsers: (filteredUsers: User[]) => void;
}

export const useStore = create<UserStore>((set) => ({
  users: [],
  filteredUsers: [],
  updateUsers: (newUsers) => set({ users: newUsers }),
  updateFilteredUsers: (filteredUsers) => set({ filteredUsers }),
}));
