import React from "react";

import UsersList from "./components/users-list/UsersList";
import UserDetails from "./components/user-details/UserDetails";
import { UsersFeatureProvider } from "./providers/UsersFeatureProvider";

const UsersManagementModule = () => {
  return (
    <UsersFeatureProvider>
      <UsersList />
      <UserDetails />
    </UsersFeatureProvider>
  );
};

export default UsersManagementModule;
