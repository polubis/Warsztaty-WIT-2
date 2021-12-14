import { useState } from "react";

import { getUser } from "../services/usersService";

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = (id) => {
    setIsLoading(true);

    getUser(id)
      .then((response) => {
        setUser(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return { user, isLoading, fetchUser };
};
