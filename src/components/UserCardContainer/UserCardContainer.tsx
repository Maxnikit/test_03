import { Flex } from "@mantine/core";

import { UserCard } from "../UserCard/UserCard";

import { useStore } from "../../lib/store";

export function UserCardContainer() {
  const data = useStore((state) => state.users);
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
