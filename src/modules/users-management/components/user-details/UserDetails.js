import React from "react";
import { useUsersFeatureProvider } from "../../providers/UsersFeatureProvider";

import "./UserDetails.css";

const UserDetails = () => {
  const { isUserLoading, user } = useUsersFeatureProvider();

  if (!user) {
    return null;
  }

  return (
    <div className="user-details">
      {!isUserLoading && (
        <>
          <h1>{user.username}</h1>
        </>
      )}
    </div>
  );
};

export default UserDetails;
