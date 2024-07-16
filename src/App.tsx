import "./App.css";
import { fetchUsers } from "./api/users";
import { useQuery } from "@tanstack/react-query";
import { UserCard } from "./components/UserCard/UserCard";
import { Flex, Stack } from "@mantine/core";
import { UserCardContainer } from "./components/UserCardContainer/UserCardContainer";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  return (
    <Stack>
      <SearchBar />
      <UserCardContainer />
    </Stack>
  );
}

export default App;
