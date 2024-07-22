import { useParams } from "react-router-dom";
import { User } from "../../types";
import { useStore } from "../../lib/store";
import { UserCard } from "../UserCard/UserCard";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../api/users";
import { Title, Image } from "@mantine/core";
import { getAvatar } from "../../lib/lib";

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
  const avatar = getAvatar(user.id);
  return <UserCard {...user} />;
}
