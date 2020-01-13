import React, { useEffect } from "react";
import { Component } from "react";
import { render } from "react-dom";
import "./index.scss";
const Hamburger = require("./img/hamburger@2x.png");

const App = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const json = await res.json();

      setUsers(json.results);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header__nav">
          <div>
            <img
              className="header__nav__hamburger"
              src={Hamburger}
              alt="menu"
            />
          </div>

          <div className="header__nav__title">EXPANDABLE CONTENT</div>
          <div></div>
        </div>
      </header>

      <div className="content">
        {users.map((user, index) => (
          <div className="user-list-item" key={index}>
            <img
              className="user-list-item__picture"
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}'s Profile Pic`}
            />
            <div>
              <div className="user-list-item__name">{`${user.name.first} ${user.name.last}`}</div>
              <div className="user-list-item__location">{`${user.location.state}, ${user.location.country}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
