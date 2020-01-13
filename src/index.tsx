import React, { useEffect } from "react";
import { Component } from "react";
import { render } from "react-dom";
import "./index.scss";
const Hamburger = require("./img/hamburger@2x.png");
import UserList from "./components/UserList";

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
        <UserList users={users} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
