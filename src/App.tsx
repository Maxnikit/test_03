import "./App.css";
import { fetchUsers } from "./api/users";
import { useQuery } from "@tanstack/react-query";
import { UserCard } from "./components/UserCard/UserCard";
import { Flex, Group, Stack } from "@mantine/core";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { HomeButton } from "./components/HomeButton/HomeButton";

function App() {
  return (
    <Stack>
      <Group>
        <HomeButton /> <SearchBar />
      </Group>

      <Outlet />
    </Stack>
  );
}

export default App;
