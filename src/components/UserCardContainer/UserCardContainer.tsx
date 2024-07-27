import { Flex } from "@mantine/core";

import { UserCard } from "../UserCard/UserCard";

import { useStore } from "../../lib/store";
import { useState } from "react";

export function UserCardContainer() {
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const data = useStore((state) => state.users);
  if (!data || data.length === 0) {
    return <div>No users found</div>;
  }
  const onClick = (id: number) => {
    setFocusedCard((prevFocusedCard) => (prevFocusedCard === id ? null : id));
  };

  return (
    <Flex justify="center" wrap="wrap" gap="md">
      {data.map((user) => (
        <UserCard
          user={user}
          onClick={onClick}
          focused={user.id === focusedCard}
          key={user.id}
        />
      ))}
    </Flex>
  );
}
