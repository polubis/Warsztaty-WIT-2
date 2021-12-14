import { useMemo, useState } from "react";

const filterUsers = (users, query) => {
  if (query === "") {
    return users;
  }

  const queryLowercased = query.toLowerCase();

  return users.filter(
    (user) => user.username.toLowerCase() === queryLowercased
  );
};

export const useFilteredUsers = (users) => {
  const [query, setQuery] = useState("");

  const triggerUsersFilter = (e) => {
    setQuery(e.target.value);
  };

  const filteredUsers = useMemo(() => filterUsers(users, query), [
    users,
    query
  ]);

  return { query, filteredUsers, triggerUsersFilter };
};
