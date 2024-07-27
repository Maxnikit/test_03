import { Card, Divider, Image, Stack, Text } from "@mantine/core";
import { User } from "../../types";
import styles from "./UserCard.module.css";

import { getAvatar } from "../../lib/lib";
import { useState } from "react";

type PropsType = {
  user: User;
  focused: boolean;
  onClick: (id: number) => void;
};
export function UserCard(props: PropsType) {
  const { user, focused, onClick } = props;

  return (
    <Card
      onClick={() => onClick(user.id)}
      withBorder
      shadow="sm"
      p="sm"
      radius="md"
      className={focused ? `${styles.card} ${styles.cardActive}` : styles.card}
    >
      <Card.Section>
        <Image src={getAvatar(user.id)} height="100%" alt="Avatar" />
      </Card.Section>
      <Stack gap={5}>
        <Text size="lg" fw={600}>
          {user.username}
        </Text>
        <Divider mb="sm" />

        <Text>
          Email: <Text component="span">{user.email}</Text>
        </Text>
        <Text>
          Phone: <Text component="span">{user.phone}</Text>
        </Text>
      </Stack>
    </Card>
  );
}
