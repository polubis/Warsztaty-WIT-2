import { useState, useEffect } from "react";

import { getUsers } from "../services/usersService";

const duplicateUsers = (users, count) => {
  let usersPointer = 0;
  let sum = 0;

  return Array.from({ length: count }).reduce((acc, _, idx) => {
    if (usersPointer > users.length - 1) {
      usersPointer = 0;
    }

    sum++;

    return [...acc, { id: sum, ...users[usersPointer] }];
  }, []);
};

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        // DANGER
        // If you change it to higher value this may break performance
        // duplicateUsers(response, 3000)
        setUsers(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading };
};
