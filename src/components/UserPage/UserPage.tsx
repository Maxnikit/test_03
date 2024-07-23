import { useParams } from "react-router-dom";

import { UserCard } from "../UserCard/UserCard";

import { useStore } from "../../lib/store";

export function UserPage() {
  const { getSingleUser } = useStore();
  const { id } = useParams();

  const user = getSingleUser(Number(id));
  if (!user) {
    return <div>User not found</div>;
  }
  console.log(user);

  return <UserCard {...user} />;
}
