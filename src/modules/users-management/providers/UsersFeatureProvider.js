import { createContext, useContext } from "react";
import { useUser } from "../facades/useUser";
import { useUsers } from "../facades/useUsers";

const Context = createContext();

export const UsersFeatureProvider = ({ children }) => {
  const { users, isLoading: isUsersLoading } = useUsers();
  const { user, isLoading: isUserLoading, fetchUser } = useUser();

  return (
    <Context.Provider
      value={{
        users,
        isUsersLoading,
        user,
        isUserLoading,
        fetchUser
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUsersFeatureProvider = () => {
  return useContext(Context);
};
