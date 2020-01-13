import React from "react";
import { User } from "../components/UserList";
const OpenIcon = require("../img/open@2x.svg");

type UserListItemProps = {
  user: User;
};

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <div className="user-list-item">
      <img
        className="user-list-item__picture"
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}'s Profile Pic`}
      />
      <div>
        <div className="user-list-item__name">{`${user.name.first} ${user.name.last}`}</div>
        <div className="user-list-item__location">{`${user.location.state}, ${user.location.country}`}</div>
      </div>

      <div className="user-list-item__expandable">
        <img src={OpenIcon} alt="open" />
      </div>
    </div>
  );
};

export default UserListItem;
