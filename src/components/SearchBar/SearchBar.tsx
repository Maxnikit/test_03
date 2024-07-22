import { useState } from "react";
import { InputBase, Combobox, useCombobox } from "@mantine/core";
import { User } from "../../types";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../lib/store";

export function SearchBar() {
  const users = useStore((state) => state.users);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<User | null>(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const shouldFilterOptions = users.every(
    (user) =>
      user.username !== search && user.email !== search && user.phone !== search
  );
  const filteredOptions = shouldFilterOptions
    ? users.filter(
        (user) =>
          user.username.toLowerCase().includes(search.toLowerCase().trim()) ||
          user.email.toLowerCase().includes(search.toLowerCase().trim()) ||
          user.phone.toLowerCase().includes(search.toLowerCase().trim())
      )
    : users;

  // Create an array of Combobox.Option components from the filtered options
  const options = filteredOptions.map((user) => (
    <Combobox.Option value={user.username} key={user.username}>
      {user.username} - {user.email}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(option) => {
        setValue(users.find((user) => user.username === option) || null);
        setSearch(option);
        const id = users.find((user) => user.username === option)?.id;
        navigate(`/users/${id}`);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            const selectedUser = value ? value.username : "";
            if (selectedUser !== search) {
              setSearch(selectedUser);
            }
          }}
          placeholder="Search user"
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? (
            options
          ) : (
            <Combobox.Empty>No matching users found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
