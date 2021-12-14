import React from "react";
import { useFilteredUsers } from "../../facades/useFilteredUsers";
import { useUsersFeatureProvider } from "../../providers/UsersFeatureProvider";

import "./UsersList.css";

const UsersList = ({ className }) => {
  const { isUsersLoading, users, fetchUser } = useUsersFeatureProvider();
  const { query, filteredUsers, triggerUsersFilter } = useFilteredUsers(users);
  console.log(users);
  if (isUsersLoading) {
    return <div>Ladownaie uzytkownikow</div>;
  }

  return (
    <ul className={`users-list ${className}`}>
      <input value={query} onChange={triggerUsersFilter} />
      {filteredUsers.map((user, idx) => (
        <li
          key={user.id}
          style={{
            animationDelay: `${idx * 0.1}s`
          }}
          className="user-list-item"
          onClick={() => fetchUser(user.id)}
        >
          <figure className="user-avatar">
            <img src="https://i.pinimg.com/564x/07/1b/97/071b976984be61fa44c2e9a8d99238ad.jpg" />
          </figure>
          <div className="user-list-item-container">
            <header>
              <span className="username">{user.username}</span>
              <span className="date">{new Date().toDateString()}</span>
            </header>
            <span className="message">{user.address.street}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
