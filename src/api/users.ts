import { User } from "../types";

// Gets data about first 9 users
export async function getUsers(): Promise<User[]> {
  const response = await fetch("https://fakestoreapi.com/users?limit=9");
  if (!response.ok) {
    throw new Error("Problem fetching users");
  }
  const users: User[] = await response.json();

  return users;
}

export async function getUserById(id: number): Promise<User> {
  const response = await fetch(`https://fakestoreapi.com/users/${id}`);
  if (!response.ok) {
    throw new Error("Problem fetching user");
  }
  const user: User = await response.json();
  return user;
}
