import {
  Avatar,
  Button,
  Card,
  Divider,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { User } from "../../types";
import styles from "./UserCard.module.css";

import { getAvatar, makeFirstLetterUppercase } from "../../lib/lib";

export function UserCard(user: User) {
  const fullName = `${makeFirstLetterUppercase(
    user.name.firstname
  )} ${makeFirstLetterUppercase(user.name.lastname)}`;

  return (
    <Card withBorder shadow="sm" p="sm" radius="md" className={styles.card}>
      <Card.Section>
        <Image src={getAvatar(user.id)} height="100%" alt="Avatar" />
      </Card.Section>
      <Stack gap={5}>
        <Text size="lg" fw={600}>
          {user.username}
        </Text>
        <Divider mb="sm" />
        <Text fs="italic" size="lg">
          {fullName}
        </Text>
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
