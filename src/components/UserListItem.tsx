import React, { useState, useCallback } from "react";
import { User } from "../components/UserList";
const OpenIcon = require("../img/open@2x.svg");
const CloseIcon = require("../img/close@2x.svg");

type UserListItemProps = {
  user: User;
};

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    e => {
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  const icon = isOpen ? (
    <img
      className="user-list-item__expandable__icon--open"
      src={CloseIcon}
      alt="close"
    />
  ) : (
    <img
      className="user-list-item__expandable__icon--closed"
      src={OpenIcon}
      alt="open"
    />
  );

  return (
    <div className="user-list-item">
      <div className="user-list-item__main" onClick={handleClick}>
        <img
          className="user-list-item__main__picture"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}'s Profile Pic`}
        />
        <div>
          <div className="user-list-item__main__name">{`${user.name.first} ${user.name.last}`}</div>
          <div className="user-list-item__main__location">{`${user.location.state}, ${user.location.country}`}</div>
        </div>

        <div className="user-list-item__main__expandable">{icon}</div>
      </div>

      {isOpen ? (
        <div className="user-list-item__expandable-container">
          <div className="user-list-item__expandable-container__item">
            <div className="user-list-item__expandable-container__item__title">
              Phone
            </div>
            <div className="user-list-item__expandable-container__item__text">
              {user.phone}
            </div>
          </div>
          <div className="user-list-item__expandable-container__divider"></div>
          <div className="user-list-item__expandable-container__item">
            <div className="user-list-item__expandable-container__item__title">
              Email
            </div>
            <div className="user-list-item__expandable-container__item__text">
              <a
                target="_blank"
                href={`mailto:${user.email}`}
                className="user-list-item__email-link"
              >
                {user.email}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserListItem;
