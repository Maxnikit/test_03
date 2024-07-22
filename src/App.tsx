import "./App.css";
import { getUsers } from "./api/users";
import { useQuery } from "@tanstack/react-query";

import { Group, Stack } from "@mantine/core";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { HomeButton } from "./components/HomeButton/HomeButton";
import { useEffect } from "react";
import { useStore } from "./lib/store";
import { User } from "./types";

function App() {
  const { updateUsers } = useStore();
  const { data } = useQuery<User[], Error>({
    queryKey: ["usersData"],
    queryFn: getUsers,
  });

  useEffect(() => {
    if (data) {
      updateUsers(data);
    }
  }, [data, updateUsers]);

  return (
    <Stack>
      <Group w={"100%"}>
        <HomeButton />
        <div style={{ flex: 1 }}>
          <SearchBar />
        </div>
      </Group>

      <Outlet />
    </Stack>
  );
}

export default App;
