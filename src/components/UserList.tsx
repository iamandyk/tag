import React from "react";
import UserListItem from "./UserListItem";

export type User = {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  location: {
    state: string;
    country: string;
  };
};

type UserListProps = {
  users: Array<User>;
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <UserListItem user={user} key={index} />
      ))}
    </div>
  );
};

export default UserList;
