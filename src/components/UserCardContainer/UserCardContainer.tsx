import { Flex } from "@mantine/core";
import { User } from "../../types";
import { UserCard } from "../UserCard/UserCard";
import { getUsers } from "../../api/users";
import { useQuery } from "@tanstack/react-query";

export function UserCardContainer() {
  const { data, isLoading, isError, error } = useQuery<User[], Error>({
    queryKey: ["usersData"],
    queryFn: getUsers,
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return (
      <div>
        Oops. Could not get users. Here is error message: {error.message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <Flex justify="center" wrap="wrap" gap="md">
      {data.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
    </Flex>
  );
}
