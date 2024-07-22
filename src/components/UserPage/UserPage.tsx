import { useParams } from "react-router-dom";

import { UserCard } from "../UserCard/UserCard";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../api/users";

export function UserPage() {
  const { id } = useParams();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(Number(id)),
  });

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }
  console.log(user);

  return <UserCard {...user} />;
}
